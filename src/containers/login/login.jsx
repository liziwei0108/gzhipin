/**
 * 路由组件-登录
 */
import React, { Component } from 'react'
import { NavBar, WingBlank, List, InputItem, WhiteSpace, Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import Logo from '../.././components/logo/logo'
import {login} from '../../redux/actions'

import '../../assets/css/index.less'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',        //用户名
      password: '',        //密码
    }
  }
  login = async() => {
    const {username, password} = this.state

    // const result  = await reqLogin(user)
    // if(result.code === 0){
    //   Toast.success('登录成功！',1)
    //   this.props.history.replace('/main')
    // }else{
    //   Toast.fail(result.msg,1)
    // }

    this.props.login(username, password)


  }
  render() {
    const {redirectTo, msg} = this.props
    if(redirectTo){
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
            <Button type="primary" onClick={this.login}>登录</Button>
            <WhiteSpace></WhiteSpace>
            <Button onClick={() => { this.props.history.replace('/register') }}>注册</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => state.user,
  { login }
)(Login)