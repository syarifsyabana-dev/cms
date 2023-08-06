import React from "react";
import { Layout, Menu } from "antd";
import { Menus } from "../../../../constants/menu";
import { useLocation } from "react-router-dom";

const { Sider } = Layout;

function SidebarLayout() {
  const { pathname } = useLocation();
  
  const pathActive = pathname.split("/")[1];

  return (
    <Sider breakpoint="lg" collapsedWidth="0" style={{ height: "100vh" }}>
      <div className="logo-vertical">
        <strong>MAIN</strong>CMS
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[pathActive || 'dashboard']}
        items={Menus}
        onClick={({ key }) => (window.location.href = `/${key}`)}
      />
    </Sider>
  );
}

export default SidebarLayout;
