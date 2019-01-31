import React from 'react'
import { getUserList } from '../redux/chatuser.redux'
import { connect } from 'react-redux'
import UserCard from './usercard'
// import ChordDataflow from '@mtfe/chord-dataflow';
// import ChordDataflow from '@mtfe/chord-dataflow';
import Immutable, { Map, List, Set, Seq } from 'immutable';

const log = console.log;
@connect(
	state => state.chatuser,
	{ getUserList }
)
class Boss extends React.Component{
	componentDidMount() {
		this.props.getUserList('genius')

		const map = List([1, 2,3,4,5,6,7,87,89,1]);

		const a = Seq(map)
			.skip(4)
			.take(3)
			.toJS()
		log(a, 'odd---')
	}

	render() {
		return <UserCard userlist={this.props.userlist}></UserCard>
	}
}

export default Boss
