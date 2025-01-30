import { Outlet } from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";
import { message } from "antd";
import { useEffect } from "react";
import { Layout } from "antd";
import "../pages/app.css";
import HeroSection from "../components/HeroSection";

const { Header, Content, Footer } = Layout;

const AuthApp = () => {
  console.log("AuthApp Rendered!");

  useEffect(() => {
    const adminMessage = sessionStorage.getItem("adminAccessMessage");
    if (adminMessage) {
      message.warning(adminMessage);
      sessionStorage.removeItem("adminAccessMessage");
    }
  }, []);

  return (
    <Layout className="app-layout">
      <Header
        className="fixed-header "
        style={{ backgroundColor: "black", height: "auto", zIndex: "10" }}
      >
        <AuthNavbar />
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
};

export default AuthApp;
