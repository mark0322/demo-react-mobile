import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux' 
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './redux'
import thunk from 'redux-thunk'
import './config' // axios
import './index.css'

// containers 
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute'
import BossInfo from './container/bossinfo'
import GeniusInfo from './container/geniusinfo'
import Dashboard from './component/dashboard'

const store = createStore(reducer, compose(
  applyMiddleware(thunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function() {}
))


// TODO 页面： boos genius me msg
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <AuthRoute /> {/* 权限验证 & 自动跳转 */}
        <Switch>
          <Route path='/bossinfo' component={BossInfo}></Route>
          <Route path='/geniusinfo' component={GeniusInfo}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
