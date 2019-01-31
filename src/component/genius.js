import React from 'react'
import {getUserList} from '../redux/chatuser.redux'
import {connect} from 'react-redux'
import UserCard from './usercard'

@connect(
	state => state.chatuser,
	{ getUserList }
)
class Genius extends React.Component {
	componentDidMount() {
		this.props.getUserList('boss')

	}
	render(){
		return <UserCard userlist={this.props.userlist}></UserCard>
	}
}

export default Genius