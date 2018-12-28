import React from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector'
import { connect } from 'react-redux'
import { update } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'


@connect(
  state => state.user,
  {
    update
  }
)
class BossInfo extends React.Component {
  state = {
    title: '',
    company: '',
    money: '',
    desc: '',
    avatar: ''
  }

  onChange = key => val => this.setState({[key]: val})



  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {redirect && (redirect !== path) && <Redirect to={this.props.redirectTo}></Redirect>}
        <NavBar mode="dark">BOSS信息完善页</NavBar>
        <AvatarSelector
          selectAvatar={imgName => this.setState({avatar: imgName})}
        ></AvatarSelector>
        <InputItem onChange={this.onChange('title')}>
          招聘职位
        </InputItem>
        <InputItem onChange={this.onChange('company')}>
          公司名称
        </InputItem>
        <InputItem onChange={this.onChange('money')}>
          职位薪资
        </InputItem>
        <TextareaItem onChange={this.onChange('desc')}
          rows={3}
          autoHeight
          title='职位要求'
        >
        </TextareaItem>
        <Button type="primary" onClick={() => this.props.update(this.state)}>保存</Button>
      </div>
    )
  }
}

export default BossInfo
