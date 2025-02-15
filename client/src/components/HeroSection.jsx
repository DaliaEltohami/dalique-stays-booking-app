import React from "react";
import Title from "antd/es/typography/Title";

const HeroSection = ({ subtitle }) => {
  return (
    <div className="hero-section text-center">
      <Title level={1} className="main-title">
        Welcome to Dalique Stays
      </Title>
      <Title level={3} className="subtitle">
        {subtitle}
      </Title>
    </div>
  );
};

export default HeroSection;
