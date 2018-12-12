import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux' 
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './redux/reducers'
import thunk from 'redux-thunk'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'

const redexDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function() {}
const store = createStore(reducers, compose(applyMiddleware(thunk), redexDevtools))
store.subscribe(() => {
  console.log(store.getState())
})


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path='/login' component={Auth}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Redirect to='/dashboard'></Redirect>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
