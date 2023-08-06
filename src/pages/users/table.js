import { Button, Dropdown, Table } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";

const TableUser = () => {
  const { datas } = useSelector(({ user }) => user);
  const itemsDropdown = [
    {
      label: <Button type="link">Update</Button>,
      key: "0",
    },
    {
      label: <Button danger type="link">Delete</Button>,
      key: "1",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: null,
      dataIndex: "action",
      key: "action",
      align: "center",
      width: "5%",
      render: () => (
        <Dropdown
          menu={{
            items: itemsDropdown,
          }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <Button icon={<EllipsisOutlined />} title="Actions" />
        </Dropdown>
      ),
    },
  ];

  return <Table size="small" dataSource={datas} columns={columns} />;
};

export default TableUser;
