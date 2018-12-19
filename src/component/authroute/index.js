import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom' // 
import { lodaData } from '../../redux/user.redux'
import { connect } from 'react-redux'


@withRouter // 使组件 获得 this.props.history 属性
@connect(
  null,
  { lodaData }
)
class AuthRoute extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    /** 当用户位于登录或注册页时，则不需向后台验证用户是否登录 */
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if (publicList.includes(pathname)) return null



    /** 功能，获取用户信息 */
    // 是否登录
    // 当前 URL， /login 不需跳转
    // 用户的 type: genius or boss
    // 用户的信息是否完善
    /** 向后台验证用户是否登录 */
    axios.get('/user/info')
      .then(res => {
        if (res.status === 200) {
          if (res.data.code === 0) {
            console.log('用户已登录')

            // 将返回的用户信息，存储到 redux 中
            this.props.lodaData(res.data.data)
          } else {
            // 未登录
            this.props.history.push('/login')
          }
        }
      })

  }

  render() {
    return null
  }
}



export default AuthRoute
