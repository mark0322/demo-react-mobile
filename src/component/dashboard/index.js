import React from 'react'
import { get } from 'lodash'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../navlink'

const Boss = () => <h1>BOSS首页</h1>
const Genius = () => <h1>Genius首页</h1>
const Msg = () => <h1>消息列表</h1>
const User = () => <h1>个人中心</h1>

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
        hide: user.type === 'genuis'
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
    const CurrentComp = get(currentObj, 'component')
    return (
      <div>
        <NavBar className='fixed-header' mode='dark'>{get(currentObj, 'title')}</NavBar>
        <CurrentComp />
        <h2>content</h2>

        <NavLinkBar data={navList}></NavLinkBar>
        <h4>footer...</h4>
      </div>
    )
  }
}

export default Dashboard
