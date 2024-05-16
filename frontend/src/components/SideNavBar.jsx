// SideBar.jsx
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { GroupOutlined, SmileOutlined, UsergroupAddOutlined, ProjectOutlined, RocketOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;
const label = ["Group Study", "Skill Exchange", "Hire A Tutor", "Paid Projects", "Creative Brains"];

const items = [
  { icon: <GroupOutlined />, label: label[0], link: '/groupStudy' },
  { icon: <SmileOutlined />, label: label[1], link: '/skillExchange' },

  { icon: <UsergroupAddOutlined />, label: label[2], link: '#' },
  { icon: <ProjectOutlined />, label: label[3], link: '/paidprojects' },

  { icon: <UsergroupAddOutlined />, label: label[2], link: '/hireTutor' },
  { icon: <ProjectOutlined />, label: label[3], link: '#' },

  { icon: <RocketOutlined />, label: label[4], link: '#' },
];

const SideBar = () => {
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100%',
        position: 'fixed',
        left: 0,
        top: 64, // Adjusted top position to remove the gap
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="logo mt-5" style={{ background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu theme="light" mode="inline" >
        {items.map((item, index) => (
          <Menu.Item key={index + 1} icon={item.icon}>
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
        <SubMenu key="sub1" icon={<RocketOutlined />} title="More">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideBar;
