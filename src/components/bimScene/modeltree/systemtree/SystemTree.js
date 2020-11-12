import React,{useState ,useEffect} from 'react'
import  apis from '../../../../services/api'
import  Utils from '../../../../utils/Utils';
import { Tree,Tabs  } from 'antd';
import axios from 'axios';
import TreeStyle from '../treestyle/TreeStyle'


let SystemTree = (props) => {
  let {filekey,rootName,searchValue} = props;
  let [treeData,setTreeData] = useState([]);
  let [selectedKeys,setKeys] = useState([]);
  let [inVisibleArr,setInVisibleArr] = useState([]);

  useEffect ( () => {
    if(filekey){
      axios.get(apis.getTreeInfo+filekey).then( e => {
        let data={
          'title':rootName,
          'key':Utils.createGuid()
        }
        data.children = Utils.getJsonTree(e.data)
        setTreeData([data]);
        setKeys([data.key]);

      })
    }
  },[filekey])
  let _props ={
    setKeys:setKeys,
    treeData:treeData,
    selectedKeys:selectedKeys,
    inVisibleArr:inVisibleArr,
    setInVisibleArr:setInVisibleArr,
    searchValue:searchValue
  }
  return (
    <TreeStyle  _props = {_props}/>
  )
}

export default  SystemTree

