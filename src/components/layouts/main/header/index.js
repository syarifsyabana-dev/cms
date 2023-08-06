import { EllipsisOutlined } from "@ant-design/icons";
import { Button, Layout, Space, theme } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const { Header } = Layout;

function HeaderLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { title } = useSelector(({ global }) => global);

  return (
    <Header
      style={{
        padding: "0 16px",
        background: colorBgContainer,
      }}
    >
      <Space
        style={{
          width: "100%",
          justifyContent: "space-between"
        }}
      >
        <h3
          style={{
            margin: 0,
          }}
        >
          {title}
        </h3>
        <Space>
          <div>Hi! <strong>Syarif Syabana</strong></div>
          <Button icon={<EllipsisOutlined />} />
        </Space>
      </Space>
    </Header>
  );
}

export default HeaderLayout;
