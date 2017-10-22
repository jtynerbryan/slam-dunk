import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='Slam Dunk'
          active={activeItem === 'slam dunk'}
          onClick={this.handleItemClick}
        >
          Slam Dunk
        </Menu.Item>

        <Menu.Item
          name='Highlights'
          active={activeItem === 'highlights'}
          onClick={this.handleItemClick}
        >
          Highlights
        </Menu.Item>

        <Menu.Item
          name='Search'
          active={activeItem === 'search'}
          onClick={this.handleItemClick}
        >
          Search
        </Menu.Item>
        <Menu.Item
          name='GitHub'
          active={activeItem === 'github'}
          onClick={this.handleItemClick}
        >
          GitHub
        </Menu.Item>
      </Menu>
    )
  }
}
