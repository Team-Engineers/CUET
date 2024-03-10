import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdHome, MdOutlineShowChart } from "react-icons/md";
import { TbCards } from "react-icons/tb";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "./Dash.css";
const { Header, Sider, Content } = Layout;
const DashBoardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();
  const navigate = useNavigate();
  const handleMenuClick = (key) => {
    setActiveMenuItem(key);
    navigate(key);
  };
  const gradientColor = "linear-gradient(180deg, #ffffff 0%, #86b1e3 100%)";

  return (
    <div className=" overflow-hidden ">
      <Navbar height={"10vh"} />
      <div className="w-[200px] justify-center flex mx-auto ">
        <div className="flex h-[35px] mx-[1vw]  z-50 bottom-4 md:hidden rounded-2xl gap-[1%] p-3 items-center fixed bg-transparent backdrop-blur-[80px]  flex-row  justify-between">
          <div className={`menu-item transition-all text-[4vw] duration-100 cursor-pointer flex justify-center items-center rounded-md p-3 hover:bg-slate-400 ${activeMenuItem === "" ? " text-blue-600  font-semibold" : ""}`} onClick={() => handleMenuClick("")}>
            <MdHome className="fs-4" />
            <span className="ml-2">Home</span>
          </div>
          <div className={`menu-item transition-all text-[4vw] duration-100 cursor-pointer flex justify-center items-center rounded-md p-3 hover:bg-slate-400 ${activeMenuItem === "progress" ? " text-blue-600 b font-semibold" : ""}`} onClick={() => handleMenuClick("progress")}>
            <MdOutlineShowChart className="fs-4" />
            <span className="ml-2">Progress</span>
          </div>
          <div className={`menu-item transition-all text-[4vw] duration-100 cursor-pointer flex justify-center items-center rounded-md p-3 hover:bg-slate-400  ${activeMenuItem === "plans" ? " text-blue-600 font-semibold" : ""}`} onClick={() => handleMenuClick("plans")}>
            <AiOutlineUser className="fs-4" />
            <span className="ml-2">Plans</span>
          </div>

        </div >
      </div >
      <Layout  >
        <Sider className="max-md:hidden" trigger={null} theme="light" collapsible collapsed={collapsed}>
          <div className="flex h-[300px]  flex-col justify-between">
            <div >
              <div className={` ${collapsed ? '' : 'relative left-[100px] pb-5 flex justify-end'}`}>
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: " trigger ",
                    onClick: () => setCollapsed(!collapsed),
                  }
                )}
              </div>


              <Menu
                style={{ background: gradientColor, height: "200vh" }}
                theme="light"
                className=""
                mode="inline"
                defaultSelectedKeys={[""]}
                onClick={({ key }) => {
                  navigate(key);
                }}
                items={[

                  {
                    key: "",
                    icon: <MdHome className="fs-4 " style={{ fontSize: "20px" }} />,
                    label: "Home",
                  },
                  {
                    key: "progress",
                    icon: <MdOutlineShowChart className="fs-4" style={{ fontSize: "20px" }} />,
                    label: "Progress",
                  },
                  {
                    key: "plans",
                    icon: <TbCards className="fs-4" style={{ fontSize: "20px" }} />,
                    label: "Plans",
                  }
                ]}
              />
            </div>
          </div>


        </Sider>

        <Layout className="site-layout" style={{ background: "#dfe7f0" }} >
          <Content
            style={{
              margin: "14px 10px",
              padding: 24,
              borderRadius: "15px",
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout >
    </div >
  );
};
export default DashBoardLayout;