import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          position='right'
          name='GitHub'
          active={activeItem === 'github'}
          onClick={this.handleItemClick}
          href='http://github.com/jtynerbryan' target="_blank"
        >
          GitHub
        </Menu.Item>
      </Menu>
    )
  }
}

export default Navbar
