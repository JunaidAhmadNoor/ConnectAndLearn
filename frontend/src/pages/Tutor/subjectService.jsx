import React, { useState, useEffect } from "react";
import { Button, Card, Space, Modal, Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TutorAppLayout from "../../components/TutorAppLayout";

const { TextArea } = Input;

const SubjectService = () => {
    const [subjects, setSubjects] = useState([]);
    const [editingSubject, setEditingSubject] = useState(null);
    const [editModalVisible, setEditModalVisible] = useState(false);

    useEffect(() => {
        // Fetch data from backend API
        axios.get('/getListSubject')
            .then(response => {
                setSubjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching subjects:', error);
            });
    }, []);

    const handleEdit = (subject) => {
        setEditingSubject(subject);
        setEditModalVisible(true);
    };
    
    const handleEditSubmit = async (values) => {
        try {
            const updatedSubject = { id: editingSubject._id, ...values }; // Include the id
            await axios.put('/editListSubject', updatedSubject);
            // Reload subjects after edit
            axios.get('/getListSubject')
                .then(response => {
                    setSubjects(response.data);
                    // Display success toast
                    message.success('Subject updated successfully!');
                });
            setEditModalVisible(false);
        } catch (error) {
            console.error('Error editing subject:', error);
        }
    };
    
    const handleDelete = async (subjectId) => {
        try {
            await axios.delete(`/deleteListSubject/${subjectId}`); // Use subjectId as URL parameter
            // Reload subjects after delete
            axios.get('/getListSubject')
                .then(response => {
                    setSubjects(response.data);
                    // Display success toast
                    message.success('Subject deleted successfully!');
                });
        } catch (error) {
            console.error('Error deleting subject:', error);
        }
    };
    
    const handleCancelEdit = () => {
        setEditModalVisible(false);
    };

    return (
        <TutorAppLayout>
            <div className="ml-64 mt-28">
                <Link to="/listSubject">
                    <Button>List Subjects</Button>
                </Link>
                <div>
                <Space direction="vertical" className="grid grid-cols-3 gap-4" style={{ marginTop: '20px' }}>
                    {subjects.map(subject => (
                        <Card key={subject._id} title={subject.subjectName} style={{ width: 300 }}>
                            <p>Skills: {subject.skills}</p>
                            {subject.instituteName && <p>Institute Name: {subject.instituteName}</p>}
                            <p>Amount-RS: {subject.amount}</p>
                            <Space className="mt-4">
                                <Button onClick={() => handleDelete(subject._id)}>Delete</Button>
                                <Button className="ml-20" type="primary" onClick={() => handleEdit(subject)}>Edit</Button>
                            </Space>
                        </Card>
                    ))}
                </Space>
                <Modal
                    title="Edit Subject"
                    visible={editModalVisible}
                    onCancel={handleCancelEdit}
                    footer={null}
                >
                    <Form onFinish={handleEditSubmit} initialValues={editingSubject}>
                        <Form.Item label="Subject Name" name="subjectName">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Skills" name="skills">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Institute Name" name="instituteName">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Amount" name="amount">
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Save</Button>
                        </Form.Item>
                    </Form>
                </Modal>
                </div>
            </div>
        </TutorAppLayout>
    );
}

export default SubjectService;
