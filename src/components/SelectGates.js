import { Select } from 'antd';
import React from 'react'
import ReactDOM from 'react-dom'
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <div>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>Disabled</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  </div>);
