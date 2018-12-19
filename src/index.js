import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux' 
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './redux'
import thunk from 'redux-thunk'
import './config' // axios

// containers 
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute'

const store = createStore(reducer, compose(
  applyMiddleware(thunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function() {}
))

function Boss(props) {
  return <h2>BOSS 页面</h2>
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <AuthRoute /> {/* 权限验证 & 自动跳转 */}
        <Route path='/boss' component={Boss}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
