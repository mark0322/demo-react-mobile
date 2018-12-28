import React from 'react'
import { Grid, List } from 'antd-mobile';

class AvatarSelector extends React.Component {
  state = {
    icon: '',
    text: ''
  }

  avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                      .split(',')
                      .map(name => ({
                        icon: require(`../img/${name}.png`),
                        text: name
                      }))

  render() {
    const gridHeader = this.state.icon
                        ? (<div>
                            <span>已选择头像</span>
                            <img style={{width: 20}} src={this.state.icon} alt="portrait"/>
                          </div>)
                        : <div>请选择头像</div>

    return (
      <div>
        <List renderHeader={() => gridHeader}> 
          <Grid 
            data={this.avatarList} 
            columnNum={5}
            onClick={(el, i) => {
              this.props.selectAvatar(el.text)
              this.setState(el)
            }}
          />
        </List>
      </div>
    )
  }
}

export default AvatarSelector
