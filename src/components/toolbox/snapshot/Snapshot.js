import React,{usestate } from 'react'
import  IconFont from '../../../utils/IconFont'
import { Input ,Tree } from 'antd';
import Header from '../header/Header'
import './Snapshot.less';

const { Search } = Input;
let Snapshot = (props) => {
  let addCancelTools = props.addCancelTools;

  const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          disabled: true,
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
              disableCheckbox: true,
            },
            {
              title: 'leaf',
              key: '0-0-0-1',
            },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
        },
      ],
    },
  ];

  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <div id="bosgeo-layerManage" className="popup">
      <Header headername={'图层'} addCancelTools={addCancelTools}/>
      <div className="firstWrapper">
        <div className="search">
          <Search placeholder="请输入选项名称" onSearch={value => console.log(value)} enterButton />

        </div>
        <div className="treeWrapper">
          <Tree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={treeData}
          />
        </div>

      </div>
    </div>
  )

}
export default  Snapshot
