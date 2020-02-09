import {combineReducers} from 'redux'
import { AUTH_SUCCESS, ERROR_MSG } from './action-types'

//定义user的初始值
const initUser = {
  username: '',
  type: '',
  msg: '',    //错误提示信息
  redirectTo: ''

}

function user(state = initUser, action){
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...action.data, redirectTo:'/'}
    case ERROR_MSG:
      const msg = action.data
      return {...state, msg}
    default:
      return state
  }
}

function yyy(state = 0, action){
  return state
}

export default combineReducers({
  user,
  yyy
})