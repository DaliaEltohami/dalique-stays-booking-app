import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { Layout, Typography } from "antd";
import "./app.css";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout className="app-layout">
      <Header
        className="fixed-header "
        style={{ backgroundColor: "black", height: "auto", zIndex: "10" }}
      >
        <Navbar />
      </Header>

      <Content className="site-content">
        <div className="bg-overlay"></div>

        {/* main content */}
        <main>
          <Outlet />
        </main>
      </Content>

      <Footer className="footer">
        Dalique Stays ©{new Date().getFullYear()} All Rights Reserved
      </Footer>
    </Layout>
  );
}

export default App;
