/**
 * 包含应用中所有借口请求函数的模块
 */

import ajax from './ajax'

export const reqLogin = (user) => ajax('/login',user,'POST')

export const reqRegister = (user) => ajax('/register',user,'POST')