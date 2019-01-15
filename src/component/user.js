import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
import browserCookie from 'browser-cookies'
import { withRouter } from 'react-router-dom'

@withRouter
@connect(
  state => state.user
  )
class User extends React.Component {

  // alert = Modal.alert;
  showAlert = () => {
    const alertInstance = Modal.alert('注销', 'Are you sure???', [
      { text: 'Cancel', onPress: () => browserCookie.erase('userid'), style: 'default' },
      { text: 'OK', onPress: () => console.log('ok') },
    ]);

    // alertInstance.close();
  };

  logout = () => {
    // 
    this.showAlert()
    console.log('logout.. /login')
    // this.props.history.push('login')
  }

  render() {
    console.log(this.props, 'User')
    const { props } = this
    const { Item, Item: { Brief } } = List

    return (
      props.user
        ? <div>
            <Result 
              img={<img src={require(`./img/${props.avatar}.png`)} alt={props.avatar} style={{width: 50}}></img>}
              title={this.props.user}
              message={props.type === 'boss' ? props.company : ''}
            />

            <List renderHeader={() => '简介'}>
              <Item>
                {props.title}
                <br />
                {props.desc.split('\n').map(item => <Brief key={item}>{item}</Brief>)}
                {props.money && <Brief>{'薪资: ' + props.money}</Brief>}
              </Item>
            </List>

            <List>
              <Item onClick={this.logout}>退出登录</Item>
            </List>

            <WhiteSpace></WhiteSpace>
          </div>
        : ''
    )
  }
}

export default User
