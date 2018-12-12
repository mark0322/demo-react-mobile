import React from 'react'
import { Route, Link } from 'react-router-dom'
import App from '../../App.jsx'
import './Dashboard.css'
import { connect } from 'react-redux'
import { logout } from '../../redux/Auth.redux'


const Qibinglian = () => <h1>。。。骑兵连。。。</h1>
const Erying = () => <h1>。。。二营。。。</h1>

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    user: state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    const match = props.match
    this.app = (
      <div className='dashboard-warp'>
        <ul>
          <li>
            <Link to={`${match.url}`}>一营</Link>
          </li>
          <li>
            <Link to={`${match.url}/erying`}>二营</Link>
          </li>
          <li>
            <Link to={`${match.url}/qibinglian`}>骑兵连</Link>
          </li>
        </ul>
        <Route path={`${match.url}`} exact component={App}></Route>
        <Route path={`${match.url}/erying`} component={Erying}></Route>
        <Route path={`${match.url}/qibinglian`} component={Qibinglian}></Route>
      </div>
    )

    // this.redirectToLogin = <Redirect to='login'></Redirect>
    this.redirectToLogin = (
      <div>
        <h1>你未登录</h1>
        <br />
        <button onClick={this.login}>重新登录</button>
      </div>
    )
  }

  login = () => {
    this.props.history.push('/login')
  }

  render() {
    return this.props.isAuth ? this.app : this.redirectToLogin
  }
}

export default Dashboard

