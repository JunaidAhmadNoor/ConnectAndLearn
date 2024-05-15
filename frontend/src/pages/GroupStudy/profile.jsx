import React, { useState } from 'react';
import { Form, Input, Button, Typography, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons'; // Import UploadOutlined
import axios from 'axios';
import AppLayout from '../../components/AppLayout';

const { Title } = Typography;

const UserProfile = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const response = await axios.post('/sendprofile', values);
            if (response.status === 201) {
                console.log('Profile sent successfully!');
                form.resetFields();
            } else {
                console.error('Failed to send profile');
            }
        } catch (error) {
            console.error('Failed to send profile', error);
        }
        setLoading(false);
    };

    return (
        <AppLayout>
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
                    <Upload name="profileImage" listType="picture">
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>Submit</Button>
                </Form.Item>
            </Form>
        </AppLayout>
    );
};

export default UserProfile;
