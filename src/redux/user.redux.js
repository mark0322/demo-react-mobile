import axios from "axios"
import { Toast } from 'antd-mobile'
import { getRedirectPath } from '../modules/util'
// constance
const  REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'


// action creator
const errorMsg = msg => ({msg, type: ERROR_MSG})
const registerSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
})
const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
})

// state
const initState = {
  redirectTo: '', // 注册成功后，跳转的地址
  msg: '',
  isAuth: false,
  user: '',
  pwd: '',
  type: ''
}

// reducer
export function user(state = initState, action) {
  switch(action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        msg: '',
        isAuth: true,
        redirectTo: getRedirectPath(action.payload),
        ...action.payload
      }
    case ERROR_MSG:
      return {
        ...state,
        isAuth: false,
        msg: action.msg,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        msg: '',
        isAuth: true,
        redirectTo: getRedirectPath(action.payload),
        ...action.payload
      }
    default:
      return state
  }
}

// dispatch
export function register({user, pwd, repeatPwd, type}) {
  if (!user || !pwd ) {
    return errorMsg('用户名或密码未输入')
  }
  if (pwd !== repeatPwd) {
    return errorMsg('两次密码不一致')
  }

  return dispatch => {
    axios.post('/user/register', {user, pwd, type})
      .then(res => {
        if (res.status == 200 && res.data.code == 0) {
          dispatch(registerSuccess({user, pwd, type}))
          Toast.success('注册成功～', 1)
        } else {
          Toast.fail(res.data.msg, 1);
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

export function login({user, pwd}) {
  if (!user || !pwd ) {
    return errorMsg('用户名或密码未输入')
  }
  return dispatch => {
    axios.post('/user/login', {user, pwd})
      .then(res => {
        if (res.status == 200 && res.data.code == 0) {
          dispatch(loginSuccess(res.data.data))
          Toast.success('登录成功～', 1)
        } else {
          Toast.fail(res.data.msg, 1);
          dispatch(errorMsg(res.data.msg))
        }
      })
      .catch(err => {
        dispatch(errorMsg('登陆失败！'))
        Toast.fail('登陆失败！', 1);
      })
  }
}
