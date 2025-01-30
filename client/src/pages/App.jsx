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
        <video autoPlay mutes playsInline loop className="bg-overlay">
          <source src="/assets/hotel-building.mp4" type="video/mp4" />
        </video>

        {/* main content */}
        <main>
          <HeroSection />
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
