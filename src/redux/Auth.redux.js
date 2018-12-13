import api from '../modules/api'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'

const initState = {
  isAuth: false,
  user: 'mark',
  title: 'none',
  age: 20,
}

// reducer
export default function auth(state = initState, action) {
  switch(action.type) {
    case LOGIN:
      return { ...state,
        isAuth: true,
        user: action.name
      }
    case LOGOUT:
      return { ...state,
        isAuth: false,
        user: ''
      }
    case USER_DATA:
      return {
        ...state,
        isAuth: true,
        user: action.payload[0].author,
        title: action.payload[0].title,
        age: action.payload[0].age
      }
    default:
      return state
  }
}

// dispatch 
export function getUserData(dispatch) {
  api.get('/api/data')
    .then(res => {
      if (res.status === 200) {
        dispatch(userData(res.data))
      }
    })
}

// action creator
export function userData(data) {
  return {
    type: USER_DATA,
    payload: data
  }
}

export function login(name) {
  return { type: LOGIN, name }
}

export function logout() {
  return { type: LOGOUT }
}
