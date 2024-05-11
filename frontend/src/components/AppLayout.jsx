
import React from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { LuUserCircle } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";

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


const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];
export default function SidebarTwo({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className="flex flex-col h-screen w-screen">
      {/* Navbar */}
      <div className="fixed w-full bg-white ">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-1 py-3 sm:px-6 lg:px-0 ">
          <div className="inline-flex items-center ">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="font-bold">Connect And Learn</span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                    <span>
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mr-4 hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2 ">
            <input type="text" placeholder="Search here" className="w-full outline-none " />
            <div className="justify-center text-lg  min-w-[50px] h-8 bg-red-500 flex items-center rounded-r-full text-white">
            <BiSearch />
            </div>
          </div>
          
          {/* User profile icon */}
          <div className="ml-4 ">
                  <LuUserCircle className="icon h-6 w-6" />
                </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 50 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      <span className="font-bold">DevUI</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                          <span>
                            <ChevronRight className="ml-3 h-4 w-4" />
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="mt-2 space-y-2">
                    <button
                      type="button"
                      className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Sign Up
                    </button>
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Log In
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex w-full">
        {/* Sidebar */}
        <aside className="min-h-screen mt-14 w-[15%] min-w-64 flex flex-col border-r bg-black px-5">
          <div className="fixed mt-0 flex flex-col justify-between ">
            <nav className="-mx-3 space-y-6">
              <div className="space-y-3 mt-9">
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <span className="mx-2  text-sm font-medium">Group Study</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <span className="mx-2 text-sm font-medium">
                    Skill Exchange
                  </span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <span className="mx-2 text-sm font-medium">Hire a tutor</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <span className="mx-2 text-sm font-medium">
                    Freelance Plateforum
                  </span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <span className="mx-2 text-sm font-medium">
                    Innovative Ideas
                  </span>
                </a>
              </div>

              <div className="space-y-3">
                <label className="px-3 text-xs font-semibold uppercase text-white">
                  Customization
                </label>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <span className="mx-2 text-sm font-medium">Themes</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <span className="mx-2 text-sm font-medium">Settings</span>
                </a>
                <a
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                  href="#"
                >
                  <span className="flex items-center mx-2 text-sm font-medium">
                    Logout
                    <LuArrowUpRightFromCircle className="ml-2 text-sm" />
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </aside>

        <div className="flex flex-col w-full mt-12">
          {/* Content */}
          <div className="flex justify-center w-full">
            <main className="px-5 py-3">{children}</main>
          </div>
          {/* Footer */}
          <footer className="bottom-0 left-0 w-full bg-white text-black text-xs px-5 py-3 text-center border-t border-black">
            <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
              <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div class="sm:col-span-2">
                  <a
                    href="/"
                    aria-label="Go home"
                    title="Company"
                    class="inline-flex items-center"
                  >
                    <svg
                      class="w-8 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke="currentColor"
                      fill="none"
                    >
                      <rect x="3" y="1" width="7" height="12"></rect>
                      <rect x="3" y="17" width="7" height="6"></rect>
                      <rect x="14" y="1" width="7" height="6"></rect>
                      <rect x="14" y="11" width="7" height="12"></rect>
                    </svg>
                    <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                      Company
                    </span>
                  </a>
                  <div class="mt-6 lg:max-w-sm">
                    <p class="text-sm text-gray-800">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam.
                    </p>
                    <p class="mt-4 text-sm text-gray-800">
                      Eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
                <div class="space-y-2 text-sm">
                  <p class="text-base font-bold tracking-wide text-gray-900">
                    Contacts
                  </p>
                  <div class="flex">
                    <p class="mr-1 text-gray-800">Phone:</p>
                    <a
                      href="tel:850-123-5021"
                      aria-label="Our phone"
                      title="Our phone"
                      class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      850-123-5021
                    </a>
                  </div>
                  <div class="flex">
                    <p class="mr-1 text-gray-800">Email:</p>
                    <a
                      href="mailto:info@lorem.mail"
                      aria-label="Our email"
                      title="Our email"
                      class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      info@lorem.mail
                    </a>
                  </div>
                  <div class="flex">
                    <p class="mr-1 text-gray-800">Address:</p>
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Our address"
                      title="Our address"
                      class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    >
                      312 Lovely Street, NY
                    </a>
                  </div>
                </div>
                <div>
                  <span class="text-base font-bold tracking-wide text-gray-900">
                    Social
                  </span>
                  <div class="flex items-center mt-1 space-x-3">
                    <a
                      href="/"
                      class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                      </svg>
                    </a>
                    <a
                      href="/"
                      class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                        <circle cx="15" cy="15" r="4"></circle>
                        <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                      </svg>
                    </a>
                    <a
                      href="/"
                      class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                      </svg>
                    </a>
                  </div>
                  <p class="mt-4 text-sm text-gray-500">
                    Bacon ipsum dolor amet short ribs pig sausage prosciutto
                    chicken spare ribs salami.
                  </p>
                </div>
              </div>
              <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p class="text-sm text-gray-600">
                  © Copyright 2020 Lorem Inc. All rights reserved.
                </p>
                <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                  <li>
                    <a
                      href="/"
                      class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      F.A.Q
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>


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
}
