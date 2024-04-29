import {React, useContext} from 'react';
import Nav from '../components/nav';
import { UserContext } from '../../context/userContext';
// import { Menu } from 'antd';
// import { UserOutlined, SettingOutlined } from '@ant-design/icons';


// const { SubMenu } = Menu;

export default function groupStudy() {
    
    const { user } = useContext(UserContext)
    return (
        <>
            
                <h1 className='mt-20'>Group Study</h1>
                <>{!!user && (<h1 >Hi {user.firstName}</h1>)}</>
            
            {/* <Menu
                mode="vertical"
                style={{ width: 200 }}
                className="mt-14"
            >
                <SubMenu key="user" icon={<UserOutlined />} title="User">
                    <Menu.Item key="profile">Profile</Menu.Item>
                    <Menu.Item key="logout">Logout</Menu.Item>
                </SubMenu>
                <SubMenu key="settings" icon={<SettingOutlined />} title="Settings">
                    <Menu.Item key="account">Account</Menu.Item>
                    <Menu.Item key="preferences">Preferences</Menu.Item>
                </SubMenu>
            </Menu> */}
        </>
    );
};
