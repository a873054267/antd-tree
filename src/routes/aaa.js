import React, { Component } from 'react';
import { connect } from 'dva';
import { List, Button } from 'antd';
import fetch from 'dva/fetch';

const data = [
  {name: 111},
  {name: 222},
];

class AAA extends Component {

  getMore = () => {
    fetch(`api/data`, {
      method: 'POST',
      mode: 'cors',
      param: {}
    }).then(res => {
      console.info(res);
    })
  };

  render () {
/*
    const { loading, data } = this.state;
*/
    return (
      <div>
        <h1>aaa</h1>
        <List
          header="header"
          footer="footer"
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <div>{item.name}</div>
            </List.Item>
          )}
        >
        </List>
        <Button icon="search" onClick={this.getMore}>more more~~~</Button>
      </div>
    )
  }
}

AAA.propsType = {};
export default connect()(AAA)
