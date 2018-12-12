import React from 'react'
import { connect } from 'react-redux'
import { login, logout } from '../../redux/Auth.redux'
import axios from 'axios'

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user
})


const mapDispatchToProps = dispatch => {
  return {
      login: (name) => {
        if (name) {
          dispatch(login(name))
        }
      },
      logout: dispatch(logout())
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Auth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      title: ''
    }
  }

  componentDidMount() {
    axios.get('/api/data')
      .then(res => {
        console.log(res, 'res')
      })
  }

  handleChangeName = (e) => {
    this.setState({name: e.target.value})
  }

  sumbit = () => {
    this.props.login(this.state.name)
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div>
        <h1>请输入用户名</h1>
        <input type="text" onChange={this.handleChangeName} value={this.state.name}/>
        <button type="submit" onClick={this.sumbit}>登录</button>
      </div>
    )
  }
}

export default Auth

