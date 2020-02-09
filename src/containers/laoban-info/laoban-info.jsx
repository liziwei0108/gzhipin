/**
 * 老板信息完善-路由容器组件
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'

import HeaderSelector from '../../components/header-selector/header-selector'

class LaobanInfo extends Component {
  render() {
    return (
      <div>
        <NavBar>老板信息完善</NavBar>
        <HeaderSelector />
        <InputItem>招聘职位</InputItem>
        <InputItem>公司名称</InputItem>
        <InputItem>职位薪资</InputItem>
        <TextareaItem
          title='招聘要求'
          rows={3}
        />
        <Button type="primary">保存</Button>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  {}
)(LaobanInfo);