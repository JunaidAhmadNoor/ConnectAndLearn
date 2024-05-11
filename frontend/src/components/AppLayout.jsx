import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Row, Col, Layout, Menu, theme, Dropdown, Flex } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const names = ['Group Study', 'Skill Exchange', 'Hire A Tutor', 'Project Place', 'Innovative Ideas']
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: names[index],
}));
const App = () => {

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        Profile
      </Menu.Item>
      <Menu.Item key="logout">
        Logout
      </Menu.Item>
    </Menu>
  );

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (

    <>
      <Row >
        <Col span={3} >
          <Layout hasSider>
            <Sider
            className='w-full h-screen fixed'>
               <div className="demo-logo-vertical" />
                  <Menu className='mt-20' theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} /> 
            </Sider>
          </Layout>

        </Col>
        <Col span={21} className='bg-gray-700'>
          ahmad
        </Col>
      </Row>
    </>





    //   <>
    //     <Layout hasSider>

    //       <div class="grid grid-cols-12">

    //         <div class="col-span-2">

    //           <Sider
    //             style={{
    //               overflow: 'auto',
    //               height: '100vh',
    //               width: '15vw',
    //               position: 'fixed',
    //               left: 0,
    //               top: 0,
    //               bottom: 0,
    //             }}
    //           >
    //             <div className="demo-logo-vertical" />
    //             <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
    //           </Sider>
    //         </div>

    //         <div class="col-span-10 bg-gray-700">
    //           <Layout >
    //               <Header className='ml-96 ' >
    //                 <UserOutlined className=" text-lg text-white " />

    //                 {/* <Dropdown className='' overlay={menu}>
    //   <a href="/" className="text-gray-700 hover:text-black flex items-center">

    //   </a>
    // </Dropdown> */}
    //               </Header>




    //               <Content>

    //               </Content>
    //             <Footer>
    //               Ant Design ©{new Date().getFullYear()} Created by Ant UED
    //             </Footer>
    //           </Layout>
    //         </div>
    //       </div>







    //     </Layout>
    //   </>
  );
};
export default App;