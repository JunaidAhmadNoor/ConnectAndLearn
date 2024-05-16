import React, { useState, useEffect } from "react";
import AppLayout from '../../components/AppLayout';
import { Card, Space, Button } from 'antd';
import axios from 'axios';

const HireTutor = () => {
    const [subjects, setSubjects] = useState([]);

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

    return (
        <AppLayout>
            <div className="ml-56 mt-20">
                <h1 className="text-5xl">Available Subjects</h1>
                <Space direction="vertical" className="grid grid-cols-3 gap-4 mt-10">
                    {subjects.map(subject => (
                        <Card key={subject._id} title={subject.subjectName} style={{ width: 300 }}>
                            <p>Skills: {subject.skills}</p>
                            {subject.instituteName && <p>Institute Name: {subject.instituteName}</p>}
                            <p>Amount: {subject.amount}</p>
                            <Space className="mt-4">
                                <Button  type="primary">Profile</Button>
                                <Button className="ml-20" type="primary">Message</Button>
                            </Space>
                        </Card>
                    ))}
                </Space>
            </div>
        </AppLayout>
    );
}

export default HireTutor;
