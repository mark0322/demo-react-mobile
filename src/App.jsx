import React from 'react'
import './App.css'
import { action_weapon } from './redux/redux.weapon'
import { connect } from 'react-redux'
import { logout } from './redux/Auth.redux'

const mapStateToProps = state => {
  return {
    num: state.changeNum.num,
    user: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNum: () => dispatch(action_weapon('INCREAMENT')),
    minusNum: () => dispatch(action_weapon('DECREAMENT')),
    reset: () =>  dispatch(action_weapon('--')),
    async_minus: () => {
      setTimeout(() => {
        dispatch(action_weapon('DECREAMENT'))
      }, 500)
    },
    login: () => {
      dispatch(logout())
      
    }
  }
}
  

// 展示型组件
@connect(mapStateToProps, mapDispatchToProps)
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2 className="title">Hi～ {this.props.user} </h2>
        <h1>你的数量是: {this.props.num}</h1>
        <br />
        <button onClick={this.props.addNum}>++</button>
        <br />
        <button onClick={this.props.minusNum}>--</button>
        <br />
        <button onClick={this.props.reset}>RESET</button>
        <br />
        <button onClick={this.props.async_minus}>ASYNC--</button>
        <br />
        <button onClick={this.props.login}>退出</button>
      </div>
    )
  }
}

export default App
