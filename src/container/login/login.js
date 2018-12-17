import React from 'react'
import Logo from '../../component/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'

@connect(
  state => state.user,
  { login }
)
class Login extends React.Component {
  state = {
    user: '',
    pwd: ''
  }
  register = () => {
    console.log(this.props, 'click - register')
    this.props.history.push('/register')
  }

  handleChange = key => val => this.setState({[key]: val})
  handleLogin = () => this.props.login(this.state)

  render() {
    return (
      <div>
        {/* 用 <Redirect /> 进行跳转 */ }
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}

        <Logo />

        <WingBlank>
          <h2 style={{textAlign: 'center'}}>登录页面</h2>
          <List>

            {this.props.msg && <p className='error-msg'>{this.props.msg}</p>}

            <InputItem
              onChange={this.handleChange('user')}
            >用户名</InputItem>
            <InputItem
              type="password"
              onChange={this.handleChange('pwd')}
            >密码</InputItem>
          </List>
          <WhiteSpace size="xl"/>
          <Button type="primary" onClick={this.handleLogin}>登录</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login
