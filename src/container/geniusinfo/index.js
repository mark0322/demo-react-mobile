import React from 'react'
import { NavBar, InputItem, TextareaItem, Button, Toast } from 'antd-mobile'
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
class GeniusInfo extends React.Component {
  state = {
    title: '',
    desc: '',
    avatar: ''
  }

  onChange = key => val => this.setState({[key]: val})

  update = () => {
    if (!this.state.avatar) {
      return Toast.info('请选择头像', 1);
    }
    this.props.update(this.state)
  }


  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {redirect && (redirect !== path) && <Redirect to={this.props.redirectTo}></Redirect>}
        <NavBar mode="dark">牛人信息完善页</NavBar>
        <AvatarSelector
          selectAvatar={imgName => this.setState({avatar: imgName})}
        ></AvatarSelector>
        <InputItem onChange={this.onChange('title')}>
          求职岗位
        </InputItem>
        <TextareaItem onChange={this.onChange('desc')}
          rows={3}
          autoHeight
          title='个人简介'
          >
        </TextareaItem>
        <Button type="primary" onClick={this.update}>保存</Button>
      </div>
    )
  }
}

export default GeniusInfo
