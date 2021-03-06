import React,{useState ,useEffect} from 'react'
import  apis from '../../../../services/api'
import  Utils from '../../../../utils/Utils';
import { Tree,Tabs  } from 'antd';
import axios from 'axios';
import TreeStyle from '../treestyle/TreeStyle'


let SpatialTree = (props) => {
  let {filekey,rootName,searchValue,setSearchValue} = props;
  let [treeData,setTreeData] = useState([]);
  let [selectedKeys,setKeys] = useState([]);
  let [inVisibleArr,setInVisibleArr] = useState([]);
  let _props ={
    setKeys:setKeys,
    treeData:treeData,
    selectedKeys:selectedKeys,
    inVisibleArr:inVisibleArr,
    setInVisibleArr:setInVisibleArr,
    searchValue:searchValue,
    setSearchValue:setSearchValue
  }
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

  return (
    <TreeStyle  _props = {_props}/>
  )
}

export default  SpatialTree

