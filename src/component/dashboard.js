import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { get } from 'lodash'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from './navlink'
import Boss from './boss.js'
import Genius from './genius.js'
import User from './user.js'

const Msg = () => <h1>消息列表</h1>


@connect(
  state => state,
)
class Dashboard extends React.Component {

  render() {
    const user = this.props.user
    
    const { pathname } = this.props.location
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: user.type === 'genius'
      },
      {
        path: '/genius',
        text: 'boss',
        icon: 'job',
        title: 'BOSS列表',
        component: Genius,
        hide: user.type === 'boss'
      },
      {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg
      },
      {
        path: '/me',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User
      }
    ]
    const currentObj = navList.find(v => v.path === pathname)
    return (
      <div>
        <NavBar className='fixed-header' mode='dark'>{get(currentObj, 'title')}</NavBar>
        <div style={{marginTop: '45px'}}>
          {/* <CurrentComp /> */}
          <Switch>
            {navList.map(item => (
              <Route key={item.path} path={item.path} component={item.component}/>
            ))}
          </Switch>
          <NavLinkBar data={navList}></NavLinkBar>
        </div>
      </div>
    )
  }
}

export default Dashboard
