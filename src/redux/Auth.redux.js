const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const initState = {
  isAuth: false,
  user: ''
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
    default:
      return state
  }
}

// action creator
export function login(name) {
  return { type: LOGIN, name }
}

export function logout() {
  return { type: LOGOUT }
}
