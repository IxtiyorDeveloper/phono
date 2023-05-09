import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, theme } from "antd";

const HeaderComponent = ({ collapsed, setCollapsed }) => {
  const { Header } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header style={{ padding: "0 16px", background: colorBgContainer }}>
      {React.createElement(
        collapsed ? (MenuUnfoldOutlined as any) : MenuFoldOutlined,
        {
          className: "trigger",
          onClick: () => setCollapsed(!collapsed),
        }
      )}
    </Header>
  );
};

export default HeaderComponent;
