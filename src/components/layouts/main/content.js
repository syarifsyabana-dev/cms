import { Col, Row, Spin, theme } from "antd";
import React from "react";

const ContentLayout = ({ children, title, spinning = false }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Spin spinning={spinning}>
      <div
        style={{
          padding: 24,
          minHeight: "calc(100vh - 179px)",
          background: colorBgContainer,
        }}
      >
        <Row gutter={[16, 16]}>
          <Col md={{ span: 12 }} xs={{ span: 24 }}>
            <strong>{title}</strong>
          </Col>
          <Col span={24}>{children}</Col>
        </Row>
      </div>
    </Spin>
  );
};

export default ContentLayout;
