// header
import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link } from 'dva/router'

class MHeader extends Component {
  render() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          <Link to="/">menu001</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/a">a</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/b">b</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default MHeader
