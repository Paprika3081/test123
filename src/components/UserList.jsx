import React from "react";
import { Card } from "antd";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <Card key={index} title={user.name.first}>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
