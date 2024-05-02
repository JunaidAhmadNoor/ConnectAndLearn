import {React, useContext} from 'react';
import { UserContext } from '../../context/userContext';
import AppLayout from '../components/AppLayout';
// import { Menu } from 'antd';
// import { UserOutlined, SettingOutlined } from '@ant-design/icons';


// const { SubMenu } = Menu;

export default function groupStudy() {
    
    const { user } = useContext(UserContext)
    return (
        <>
            <AppLayout>
                <h1 className='mt-5 text-xl'>Group Study</h1>
               
            
            {/*      */}
            </AppLayout>
        </>
    );
};
