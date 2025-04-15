import React from "react";
import { Select } from "antd";

const { Option } = Select;

const Filter = ({ filter, onChange }) => {
  return (
    <Select defaultValue={filter} style={{ width: 200 }} onChange={onChange}>
      <Option value="all">Все пользователи</Option>
      <Option value="male">Только мужчины</Option>
      <Option value="female">Только женщины</Option>
    </Select>
  );
};

export default Filter;
