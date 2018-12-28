import axios from "axios"
import { Toast } from 'antd-mobile'
import { getRedirectPath } from '../modules/util'

// constance
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const AUTH_SUCCESS = 'AUTH_SUCCESS'


const initState = {
  redirectTo: '', // 注册成功后，跳转的地址
  msg: '',
  user: '',
  type: ''
}


// action creator
const errorMsg = msg => ({ msg, type: ERROR_MSG })
const authSuccess = data => ({ type: AUTH_SUCCESS, payload: data })

// 同步的 dispatch
export const lodaData = userinfo => ({ type: LOAD_DATA, payload: userinfo })


// reducer
export function user(state = initState, action) {
  switch(action.type) {
    case AUTH_SUCCESS:
      return {...state,
        msg: '',
        redirectTo: getRedirectPath(action.payload),
        ...action.payload
      }
    case ERROR_MSG:
      return {...state,
        msg: action.msg,
      }
    case LOAD_DATA:
      return {...state,
        ...action.payload
      }
    default:
      return state
  }
}


// 异步的 dispatch
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
        if (res.status === 200 && res.data.code === 0) {
          console.log(user, type, 'register...')
          dispatch(authSuccess({user, type}))
          Toast.success('注册成功～', 1)
        } else {
          Toast.fail(res.data.msg, 1)
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
        if (res.status === 200 && res.data.code === 0) {
          dispatch(authSuccess(res.data.data))
          Toast.success('登录成功～', 1)
        } else {
          Toast.fail(res.data.msg, 1)
          dispatch(errorMsg(res.data.msg))
        }
      })
      .catch(err => {
        dispatch(errorMsg('登陆失败！'))
        Toast.fail('登陆失败！', 1)
      })
  }
}


export function update(data) {
  return dispatch => {
    axios.post('/user/update', data)
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          console.log('res - update:', res)
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}
