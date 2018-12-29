import React from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

@withRouter 
class NavLinkBar extends React.Component {

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

NavLinkBar.propTypes = {
  data: PropTypes.array.isRequired
}

export default NavLinkBar
