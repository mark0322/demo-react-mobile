import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index'

export function enthusiasm(state, action) {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) }
    default:
      return state
  }
}
