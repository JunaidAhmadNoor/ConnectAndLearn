import React, { useState } from 'react';
import { Form, Input, Button, Typography, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import TutorAppLayout from '../../components/TutorAppLayout';
import convertToBase64 from '../../utils/transformer';

const { Title } = Typography;

const UserProfilePic = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [fileList, setFileList] = useState([]);

    const onFinish = async (values) => {
        // If there's a file selected, convert it to base64
        if (fileList.length > 0) {
            const profileImage = await convertToBase64(fileList[0].originFileObj);
            values.profileImage = profileImage;
        }

        console.log(values.profileImage);
        setLoading(true);
        try {
            const response = await axios.post('/sendprofile', values);
            if (response.status === 201) {
                message.success('Profile sent successfully!');
                form.resetFields();
                setFileList([]); // Clear the file list
            } else {
                message.error('Failed to send profile');
            }
        } catch (error) {
            console.error('Failed to send profile', error);
            message.error('Failed to send profile');
        }
        setLoading(false);
    };

    const onFileChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    return (
        <TutorAppLayout>
            <Form form={form} onFinish={onFinish} layout="vertical" className='w-56 mt-20 ml-60'>
                <Title level={2}>Profile Form</Title>
                <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Institute" name="institute">
                    <Input />
                </Form.Item>
                <Form.Item label="Skills" name="skills">
                    <Input />
                </Form.Item>
                <Form.Item label="Interests" name="interests">
                    <Input />
                </Form.Item>
                <Form.Item label="Profile Image" name="profileImage">
                    <Upload name="profileImage" listType="picture" onChange={onFileChange} fileList={fileList}>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>Submit</Button>
                </Form.Item>
            </Form>
        </TutorAppLayout>
    );
};

export default UserProfilePic;
