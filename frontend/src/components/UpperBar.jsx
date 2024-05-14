import React from 'react';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import logo from '../../public/logo.png';
import Cookie from "js-cookie";
import { toast } from 'react-hot-toast';

const { Header } = Layout;

const UpperBar = () => {
  const handleLogout = () => {
    // Remove the token cookie
    Cookie.remove("token");
    toast.success('LogOut Successful');
    // Redirect the user to the login page
    window.location.href = '/signin';
  };

  // Define menu for logout dropdown
  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Avatar icon={<UserOutlined />} size="small" style={{ color: 'green' }} className="mr-2" /> {/* Added margin */}
        <a href="/profile">Profile</a>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        <Avatar icon={<LogoutOutlined />} size="small" style={{ color: 'red' }} className="mr-2" /> {/* Added margin */}
        <span>Log Out</span>
      </Menu.Item>
    </Menu>

  );

  return (
    <Header className="bg-white fixed top-0 w-full z-50 shadow-sm">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <div className="logo">
          <Avatar src={logo} size={32} style={{ marginRight: '20px' }} />
        </div>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ color: '#1890ff' }}>
            <Avatar icon={<UserOutlined />} />
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default UpperBar;
