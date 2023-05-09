import React, { useState } from "react";
import { Breadcrumb, ConfigProvider, Layout, theme } from "antd";
import { StyledLayout } from "@/layout/style";
import HeaderComponent from "@/layout/header";
import SidebarComponent from "@/layout/sidebar";

const { Content, Footer } = Layout;

const LayoutComponent: React.FC = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <StyledLayout>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "green",
          },
        }}
      >
        <Layout className="fullHeight">
          <SidebarComponent collapsed={collapsed} setCollapsed={setCollapsed} />
          <Layout className="site-layout">
            <HeaderComponent
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
            <Content style={{ padding: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                }}
              >
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2023 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </StyledLayout>
  );
};

export default LayoutComponent;
