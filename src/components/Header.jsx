// src/components/Header.jsx
import React from "react";
import { Button, Typography } from "antd";

const { Title } = Typography;

const Header = ({ onGetUsers, onReset }) => {
  return (
    <div className="controls">
      <div className="title">
        <Title className="title1">Получение АПИ с фильтрацией</Title>
      </div>
      <div className="buttons">
        <Button onClick={onGetUsers} type="primary">
          Получить пользователей
        </Button>
      </div>
    </div>
  );
};

export default Header;
