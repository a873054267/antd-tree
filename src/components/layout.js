// 整体布局
import React, { Component } from 'react'
import { Layout } from 'antd'
import MHeader from '../components/header'

class MLayout extends Component {
  render () {
    const { children } = this.props;
    return(
      <Layout>
        <MHeader />
        <div style={{background: '#fff', padding: 24}}>{children}</div>
      </Layout>
    )
  }
}

export default MLayout
