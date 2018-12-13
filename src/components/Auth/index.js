import React from 'react'
import { connect } from 'react-redux'
import { login, logout, getUserData } from '../../redux/Auth.redux'

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user,
    title: state.auth.title,
    age: state.auth.age
})


const mapDispatchToProps = dispatch => {
  return {
      login: (name) => {
        if (name) {
          dispatch(login(name))
        }
      },
      logout: () => dispatch(logout()),
      getUserData: () => getUserData(dispatch)
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
    this.props.getUserData()
  }

  handleChangeName = (e) => {
    this.setState({name: e.target.value})
  }

  sumbit = () => {
    this.props.login(this.state.name)
    this.props.history.push('/dashboard')
  }

  render() {
    const props = this.props
    return (
      <div>
        <h1>{`user: ${props.user}; age ${props.age}`}</h1>
        <input type="text" onChange={this.handleChangeName} value={this.state.name}/>
        <button type="submit" onClick={this.sumbit}>登录</button>
      </div>
    )
  }
}

export default Auth

