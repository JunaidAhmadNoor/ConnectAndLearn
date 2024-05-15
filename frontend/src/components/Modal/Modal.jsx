// GroupModal.jsx
import React, { useState } from "react";
import { Modal } from "antd"; // Assuming you're using Ant Design for modals

const GroupModal = ({ spaceId, visible, onCreate, onCancel }) => {
  const [topicName, setTopicName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [membersAllowed, setMembersAllowed] = useState("");
  const [minutes, setMinutes] = useState("");

  const handleFormSubmit = () => {
    // Handle form submission
    onCreate({ spaceId, topicName, groupName, membersAllowed, minutes });
  };

  return (
    <Modal
      title="Add Group Details"
      visible={visible}
      onCancel={onCancel}
      onOk={handleFormSubmit}
    >
      {/* Your form inputs */}
    </Modal>
  );
};

export default GroupModal;
