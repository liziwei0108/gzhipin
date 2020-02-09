/**
 * 路由组件-注册
 */
import React, { Component } from 'react'
import { NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button} from 'antd-mobile'
import { Redirect } from 'react-router-dom'

import Logo from '../.././components/logo/logo'
import { connect } from 'react-redux'
import { register } from '../../redux/actions'
import '../../assets/css/index.less'

const ListItem = List.Item

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',        //用户名
      password: '',        //密码
      password2: '',       //确认密码
      type: 'dashen',            //用户类型
    }
  }

  register = async () => {
    const { username, password, password2, type } = this.state
    // const user = {username, password, type}

    // const result = await reqRegister(user)
    // if(result.code === 0){
    //   Toast.success('注册成功',1)
    //   this.props.history.replace('/main')

    // }else{
    //   Toast.fail(result.msg,1)
    // }
    this.props.register(username, password, password2, type)
  }

  render() {
    const { type } = this.state
    const { redirectTo, msg } = this.props

    //判断是否已经注册成功
    if (redirectTo) {
      return (
        <Redirect to={redirectTo}></Redirect>
      )
    }
    return (
      <div>
        <NavBar>Boss&nbsp;直&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
          {msg ? <p className='error-msg'>{msg}</p> : null}
          <List>
            <InputItem placeholder="请输入用户名" onChange={val => { this.setState({ username: val }) }}>用户名</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem type="password" placeholder="请输入密码" onChange={val => { this.setState({ password: val }) }}>密&nbsp;&nbsp;&nbsp;码</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem type="password" placeholder="请确认密码" onChange={val => { this.setState({ password2: val }) }}>确认密码</InputItem>
            <WhiteSpace></WhiteSpace>
            <ListItem>
              <span>用户类型</span>&nbsp;&nbsp;
              <Radio checked={type === 'dashen'} onChange={() => { this.setState({ type: 'dashen' }) }}>大神</Radio>&nbsp;&nbsp;
              <Radio checked={type === 'laoban'} onChange={() => { this.setState({ type: 'laoban' }) }}>老板</Radio>
            </ListItem>
            <WhiteSpace></WhiteSpace>
            <Button type="primary" onClick={this.register}>注册</Button>
            <WhiteSpace></WhiteSpace>
            <Button onClick={() => { this.props.history.replace('/login') }}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => state.user,
  { register }
)(Register)