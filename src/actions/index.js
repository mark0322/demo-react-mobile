import * as constants from '../constants'
export * from './actions'

export function incrementEnthusiasm() {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  }
}

export function decrementEnthusiasm() {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  }
}




