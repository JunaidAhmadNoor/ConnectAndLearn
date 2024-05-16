import React, { useState } from "react";
import { Form, Input, Button, Typography, message } from 'antd';
import TutorAppLayout from "../../components/TutorAppLayout";
import axios from 'axios';

const { Title } = Typography;

const ListSubject = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        console.log('Form values:', values); // Log the form values
        setLoading(true);
        try {
            // Post data to backend
            await axios.post('/listSubject', values);
            // Display success message
            message.success('Subject added successfully!');
            // Redirect to subjectService page
            window.location.href = '/subjectService';
        } catch (error) {
            console.error('Error submitting data:', error);
            // Display error message
            message.error('Failed to add subject. Please try again later.');
        }
        setLoading(false);
    };
    

    return (
        <TutorAppLayout>
            <div className="mt-16" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <Form  onFinish={onFinish} layout="vertical" style={{ width: '300px' }}>
                    <Title level={2}>List Subject</Title>
                    <Form.Item label="Subject Name" name="subjectName" rules={[{ required: true, message: 'Please input subject name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Skills" name="skills" rules={[{ required: true, message: 'Please input skills!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Institute Name" name="instituteName">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Amount" name="amount" rules={[{ required: true, message: 'Please input amount!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </TutorAppLayout>
    );
}

export default ListSubject;
