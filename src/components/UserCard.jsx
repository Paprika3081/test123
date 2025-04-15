import React from "react";
import { Card } from "antd";

const UserCard = ({ user }) => {
  return (
    <Card title={`${user.name.first} ${user.name.last}`}>
      <img src={user.picture.medium} alt="User" style={{ width: "100%" }} />
      <p>Город: {user.location.city}</p>
      <p>Возраст: {user.dob.age} лет</p>
      <p>
        <a href={`tel:${user.phone}`}>{user.phone}</a>
      </p>
      <p>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
    </Card>
  );
};

export default UserCard;
