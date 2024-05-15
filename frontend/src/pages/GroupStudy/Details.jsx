import React, { useState, useEffect, useContext } from "react";
import AppLayout from "../../components/AppLayout";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Table, Button, Input, Modal, Form, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { UserContext } from "../../../context/userContext";
import { toast } from "react-hot-toast";

const { Column } = Table;
const { Search } = Input;

const Details = () => {
  const { spaceId } = useParams();
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { user, sendNotification } = useContext(UserContext);

  useEffect(() => {
    if (!spaceId) {
      console.error("spaceId is undefined");
    } else {
      fetchData();
      const interval = setInterval(fetchData, 1000); // Fetch every second to update the timer
      return () => clearInterval(interval); // Cleanup the interval
    }
  }, [spaceId]);

  const fetchData = async () => {
    const currentDate = new Date();
    try {
      const response = await axios.get(`/getAddGroup?spaceId=${spaceId}`);
      const groupsWithRemainingTime = response.data.groups.map((group) => {
        const creationDate = new Date(group.createdAt);
        const expirationDate = new Date(
          creationDate.getTime() + group.minutes * 60000
        );
        const remainingTime = expirationDate - currentDate; // time difference in milliseconds

        if (remainingTime > 0) {
          const remainingMinutes = Math.floor(remainingTime / 60000);
          const remainingSeconds = ((remainingTime % 60000) / 1000).toFixed(0);
          return {
            ...group,
            remainingTime: `${remainingMinutes}:${remainingSeconds.padStart(
              2,
              "0"
            )}`,
          };
        } else {
          return {
            ...group,
            remainingTime: "Expired",
          };
        }
      });
      setGroups(groupsWithRemainingTime);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleConnectClick = async (group) => {
    if (group.membersAllowed > 0 && user !== null) { // Add a check for user not being null
      try {
        // Ensure the URL and parameters are correct
        const updateUrl = `/updateGroup/${group._id}`; // Make sure `_id` is the correct property name for the group ID
        const updateResponse = await axios.post(updateUrl, { userId: user.id });
  
        if (updateResponse.status === 200) {
          // Again, ensure the URL is correct
          const notificationUrl = "/sendNotification";
          const fullName = `${user.firstName} ${user.lastName}`; // Concatenates user's full name
          const notificationMessage = `${fullName} is now connected with ${group.groupName}`;
  
          const notificationResponse = await axios.post(notificationUrl, {
            userId: user.id,
            groupId: group._id,
            message: notificationMessage,
          });
  
          if (notificationResponse.status === 201) {
            sendNotification(notificationMessage); // Use the personalized message for internal notification as well
            fetchData();
            navigate("/Notifications"); // Ensure this path matches your routing setup
          } else {
            console.error(
              "Failed to send notification:",
              notificationResponse.statusText
            );
            toast.error("Failed to send notification");
          }
        } else {
          console.error("Failed to connect:", updateResponse.statusText);
          toast.error("Failed to connect");
        }
      } catch (error) {
        console.error("Error during the connection process:", error);
        toast.error(
          "Error during the connection process: " +
            (error.response?.data?.message || error.message)
        );
      }
    } else {
      toast.warn("No slots available to connect.");
    }
  };
  

  const filteredGroups = groups.filter((group) =>
    group.topicName.toLowerCase().includes(searchText.toLowerCase())
  );

  // Modal form fields
  const [form] = Form.useForm();

  // Handle modal submit
  const handleModalSubmit = async () => {
    try {
      const values = await form.validateFields();
      const response = await axios.post(`/addGroup/${spaceId}`, values);
      message.success("Group added successfully!");
      setModalVisible(false);
      form.resetFields();
      fetchData();
    } catch (error) {
      console.error('Error adding group:', error);
      toast.error("Failed to add group!");
    }
  };

  return (
    <AppLayout>
      <div className="mt-24 ml-64  mr-10">
        <div className="flex items-center mb-10 justify-between ">
          <Button onClick={() => setModalVisible(true)} className="ml-10 bg-blue-500 hover:bg-blue-600 text-white px-4  rounded-lg transition duration-300 ease-in-out">
            Add Group
          </Button>
          <Search
            placeholder="Enter Topic Name"
            allowClear
            enterButton={<SearchOutlined />}
            size="medium"
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: 220 }}
            className="mr-12"
          />
        </div>

        <Table
          dataSource={filteredGroups}
          pagination={{ pageSize: 10 }}
          rowKey="_id"
          className="border border-gray-200"
        >
          <Column
            title="Topic Name"
            dataIndex="topicName"
            key="topicName"
            className="px-4 py-2"
          />
          <Column
            title="Group Name"
            dataIndex="groupName"
            key="groupName"
            className="px-4 py-2"
          />
          <Column
            title="Creator Name"
            dataIndex="creatorName"
            key="creatorName"
            className="px-4 py-2"
          />
          <Column
            title="Members Allowed"
            dataIndex="membersAllowed"
            key="membersAllowed"
            className="px-4 py-2"
          />
          <Column
            title="Time Left"
            key="remainingTime"
            render={(text, record) => (
              <span className="px-4 py-2">{record.remainingTime}</span>
            )}
          />
          <Column
            title="Actions"
            key="actions"
            render={(text, record) => (
              <div className="px-4 py-2">
                {`${user.firstName} ${user.lastName}`.trim() ===
                record.creatorName.trim() ? (
                  <span>{`${user.firstName} ${user.lastName}`}</span>
                ) : (
                  user.username !== record.creatorName &&
                  record.remainingTime !== "Expired" &&
                  record.membersAllowed > 0 && (
                    <Button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md"
                      onClick={() => handleConnectClick(record)}
                    >
                      Connect
                    </Button>
                  )
                )}
              </div>
            )}
          />
        </Table>

        {/* Add Group Modal */}
        <Modal
          title="Add Group"
          visible={modalVisible}
          onCancel={() => {
            setModalVisible(false);
            form.resetFields();
          }}
          onOk={handleModalSubmit}
        >
          <Form
            form={form}
            layout="vertical"
            initialValues={{ creatorName: `${user.firstName} ${user.lastName}` }}
          >
            <Form.Item
              name="topicName"
              label="Topic Name"
              rules={[{ required: true, message: 'Please enter the topic name' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="groupName"
              label="Group Name"
              rules={[{ required: true, message: 'Please enter the group name' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="creatorName"
              label="Creator Name"
              initialValue={`${user.firstName} ${user.lastName}`}
            >
              <Input readOnly />
            </Form.Item>
            <Form.Item
              name="membersAllowed"
              label="Members Allowed"
              rules={[{ required: true, message: 'Please enter the number of members allowed' }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              name="minutes"
              label="Minutes"
              rules={[{ required: true, message: 'Please select the duration in minutes' }]}
            >
              <Input type="number" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </AppLayout>
  );
};

export default Details;
