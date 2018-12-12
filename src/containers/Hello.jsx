import Hello from '../components/Hello'
import * as actions from '../actions/'
import { connect } from 'react-redux'

export function mapStateToProps({ enthusiasmLevel, languageName, x }) {

  return {
    enthusiasmLevel,
    name: languageName,
    x: x
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
