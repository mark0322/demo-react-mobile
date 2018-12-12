const initalState = {
  num: 100
}

export default function changeNum(state = initalState, action) {
  switch (action.type) {  
    case 'INCREAMENT':
      return { num: state.num + 1 }
    case 'DECREAMENT':
      return { num: state.num - 1 }
    default:
      return state
  }
}

export const reset = type => ({ type: '--' });
export const addNum = () => ({ type: 'INCREAMENT' });
export const minusNum = () => ({ type: 'DECREAMENT' })
export const action_weapon = type => ({type})

export const async_minus = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(action_weapon('DECREAMENT'))
    }, 500)
  }
}