/**
 * 包含n个action creator函数的模块
 * 同步action:对象：{type:'xxx', data:数据值}
 * 异步action:函数：dispatch => {}
 */

import { AUTH_SUCCESS, ERROR_MSG } from './action-types'
import { reqLogin, reqRegister } from '../api/index'

//同步action 错误消息
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg })

//同步action 成功消息
const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user })

//异步action 注册
export const register = (username, password, password2, type) => {
  //判断是否填写信息
  if (!username || !password || !type) {
    return errorMsg('用户名和密码必须输入')
  }else if(password !== password2){
    return errorMsg('密码和确认密码不同')
  }
  return async dispatch => {
    //发送ajax请求
    const user = { username, password, password2, type }
    const result = await reqRegister(user)
    if(result.code === 0){
      //请求成功，分发成功消息
      dispatch(authSuccess(result.data))
    }else{
      dispatch(errorMsg(result.msg))
    }
  }

}

//异步action 登录
export const login = (username, password) => {
  //判断是否填写信息
  if (!username || !password) {
    return errorMsg('用户名和密码必须输入')
  }
  return async dispatch => {
    //发送ajax请求
    const user = { username, password }
    const result = await reqLogin(user)
    console.log(result)
    if (result.code === 0) {
      //请求成功，分发成功消息
      dispatch(authSuccess(result.data))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }

}