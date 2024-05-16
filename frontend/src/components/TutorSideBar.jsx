// SideBar.jsx
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { UsergroupAddOutlined, ProjectOutlined, RocketOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;
const label = ["SubjectService", "PaidProjects", "CreativeBrains"];

const items = [
  { icon: <UsergroupAddOutlined />, label: label[0], link: '/subjectService' },
  
  { icon: <ProjectOutlined />, label: label[1], link: '#' },
  { icon: <RocketOutlined />, label: label[2], link: '#' },
];

const TutorSideBar = () => {
  return (
    <Sider
    className='pt-10'
      style={{
        overflow: 'auto',
        height: '100%',
        position: 'fixed',
        left: 0,
        top: 64, // Adjusted top position to remove the gap
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      }}
    >
      <div className="logo" style={{ background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu theme="light" mode="inline" >
        {items.map((item, index) => (
          <Menu.Item key={index + 1} icon={item.icon}>
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
        
      </Menu>
    </Sider>
  );
};

export default TutorSideBar;
