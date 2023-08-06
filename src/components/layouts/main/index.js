import { Layout } from "antd";
import SidebarLayout from "./sidebar";
import HeaderLayout from "./header";
import FooterLayout from "./footer";
const { Content } = Layout;

const MainLayout = ({ children }) => {

  return (
    <Layout>
      <SidebarLayout />
      <Layout>
        <HeaderLayout />
        <Content
          style={{
            margin: "24px 16px",
          }}
        >
          {children}
        </Content>
        <FooterLayout />
      </Layout>
    </Layout>
  );
};
export default MainLayout;
