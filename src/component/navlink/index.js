import React from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

// switch route on the bottom bar
@withRouter
class NavLinkBar extends React.Component {
  static propTypes = { data: PropTypes.array.isRequired }

  render() {
    const navList = this.props.data.filter(v => !v.hide)
    const { pathname } = this.props.location
    return (
      <TabBar>
        {navList.map(v => (
          <TabBar.Item
            title={v.text}
            key={v.path}
            icon={{uri: require(`src/naving/${v.icon}.png`)}}
            selectedIcon={{uri: require(`src/naving/${v.icon}-active.png`)}}
            selected={pathname === v.path}
            onPress={() => this.props.history.push(v.path)}
          />
        ))}
      </TabBar>
    )
  }
}


export default NavLinkBar
