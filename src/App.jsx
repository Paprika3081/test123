import React, { useState, useEffect } from "react";
import { Layout, Row, Col, Button, Card } from "antd";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import Filter from "./components/Filter";
import Statistics from "./components/Statistics";
import ResetButton from "./components/ResetButton";

const { Content } = Layout;

const App = () => {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({
    totalRequests: 0,
    maleCount: 0,
    femaleCount: 0,
    averageAge: 0,
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    const savedStats = JSON.parse(localStorage.getItem("stats"));

    if (savedUsers && savedStats) {
      setUsers(savedUsers);
      setStats(savedStats);
    }
  }, []);

  const onGetUsers = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => {
        const newUsers = data.results;
        setUsers(newUsers);

        const newStats = {
          totalRequests: stats.totalRequests + 1,
          maleCount: newUsers.filter((user) => user.gender === "male").length,
          femaleCount: newUsers.filter((user) => user.gender === "female").length,
          averageAge:
            newUsers.reduce((acc, user) => acc + user.dob.age, 0) / newUsers.length,
        };

        setStats(newStats);
        localStorage.setItem("users", JSON.stringify(newUsers));
        localStorage.setItem("stats", JSON.stringify(newStats));
      });
  };

  const onReset = () => {
    setUsers([]);
    setStats({
      totalRequests: 0,
      maleCount: 0,
      femaleCount: 0,
      averageAge: 0,
    });
    localStorage.removeItem("users");
    localStorage.removeItem("stats");
  };

  const onFilterChange = (value) => {
    setFilter(value);
  };

  const filteredUsers = users.filter((user) => {
    if (filter === "all") return true;
    if (filter === "male") return user.gender === "male";
    if (filter === "female") return user.gender === "female";
  });

  return (
    <Layout className="layout">
      <Header onGetUsers={onGetUsers} />
      <Content style={{ padding: "20px" }}>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Filter filter={filter} onChange={onFilterChange} />
            <ResetButton onReset={onReset} />
          </Col>
          <Col span={18}>
            <Statistics stats={stats} />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          {filteredUsers.map((user, index) => (
            <Col span={8} key={index}>
              <UserCard user={user} />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
