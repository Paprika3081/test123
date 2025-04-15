import React from "react";
import { Button, Typography } from "antd";

const { Title } = Typography;

const Header = ({ onGetUsers }) => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f2f5" }}>
      <Title level={2}>Получение АПИ с фильтрацией</Title>
      <Button onClick={onGetUsers} type="primary" style={{ marginRight: 10 }}>
        Получить пользователей
      </Button>
    </div>
  );
};

export default Header;
