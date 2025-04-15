import React from "react";
import { Card } from "antd";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = ({ stats }) => {
  return (
    <Card title="Статистика">
      <p>Запросов: {stats.totalRequests}</p>
      <p>Средний возраст: {Math.round(stats.averageAge)}</p>
      <PieChart width={300} height={200}>
        <Pie
          data={[
            { name: "Мужчины", value: stats.maleCount },
            { name: "Женщины", value: stats.femaleCount },
          ]}
          cx={150}
          cy={100}
          outerRadius={80}
          dataKey="value"
          label
        >
          <Cell fill="#8884d8" />
          <Cell fill="#f06292" />
        </Pie>
      </PieChart>
    </Card>
  );
};

export default Statistics;
