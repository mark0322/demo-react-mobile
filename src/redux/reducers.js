import { combineReducers } from 'redux'

import changeNum from './redux.weapon'
import auth from './Auth.redux'

const reducers = combineReducers({
  changeNum,
  auth
})

export default reducers
