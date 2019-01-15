import React from 'react'
import Logo from '../../component/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
import './index.css'

const mapStateToProps = state => state.user

const mapDispatchToProps = {
  register
}

@connect(mapStateToProps, mapDispatchToProps)
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'genius',
      user: '',
      pwd: '',
      repeatPwd: ''
    }
  }

  handleChange = key => val => this.setState({[key]: val})

  // 点击 注册
  handleRegister = e => this.props.register(this.state)

  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {/* 用 <Redirect /> 进行跳转 */ }
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo />

        <WingBlank>

          <h2 style={{textAlign: 'center'}}>注册页面</h2>

          <List>
            {this.props.msg && <p className='error-msg'>{this.props.msg}</p>}
            <InputItem 
              clear 
              onChange={this.handleChange('user')} 
              value={this.state.user}
            >用户名</InputItem>
            <InputItem 
              type="password" 
              onChange={this.handleChange('pwd')} 
              value={this.state.pwd}
            >密码</InputItem>
            <InputItem 
              type="password" 
              onChange={this.handleChange('repeatPwd')} 
              value={this.state.repeatPwd}
            >确认密码</InputItem>
          </List>

          <WhiteSpace />

          <RadioItem 
            checked={this.state.type === 'genius'}
            onClick={() => this.handleChange('type')('genius')}
          >牛人</RadioItem>
          <RadioItem 
            checked={this.state.type === 'boss'}
            onClick={() => this.handleChange('type')('boss')}
          >老板</RadioItem>
          <WhiteSpace />

          <Button
            type="primary"
            onClick={this.handleRegister}
          >注册</Button>

        </WingBlank>
      </div>
    )
  }
}

export default Register


