import React,{useState ,useRef,useEffect} from 'react'
import { Tree  } from 'antd';
import styles from './TreeStyle.less';
import  Utils from '../../../../utils/Utils';
import apis from "../../../../services/api";


let TreeStyle = (props) => {
  let {treeData,selectedKeys,setKeys,inVisibleArr,setInVisibleArr,searchValue} = props._props;
  let reftree = useRef();
  let [expandKeys,setExpandKeys] = useState( [] );
  let [highLightKeys,setHighLightKeys] = useState( [] );
  
  const treeDatacs = [
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

  useEffect( e => {
    window.reftree = reftree
    alert('请在控制台查看tree对象')
    console.log(reftree.current)
  },[] )

  useEffect ( () => {
    let tp = [];
    if(searchValue!=''){
      treeData.map(v => {
        tp = Utils.getSearchKeyByName(v,searchValue)
      })
      let parentKey = [];
      tp.map( v => {
        let key = Utils.getParentKey(v,treeData);
        if(parentKey.indexOf(key)==-1){
          parentKey.push(key)
        }
      })
      setExpandKeys([...parentKey]);
      setHighLightKeys([...tp]);
    }
  },[searchValue]);

  const onExpand = (exp, info) => {

    let tp = [...exp];
    setExpandKeys(tp)

  }
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    let key= info.node.props.eventKey
    console.log(key)
  };
  const onCheck = (checkedKeys, info) => {
    //首先判断是否为父节点，如果是，则隐藏全部下属子元素
    let conditions = [] ;
    let tileset = map.layerManager._modellayers.model.getModelByName('test');
    let titles =[]
    let key= info.node.props.eventKey;
    //增加判断是否为根节点，如果为根节点，则使用tileset来控制
    if(info.node.props.pos == '0-0'){
      if(info.checked){
        checkedKeys.push(key);
        tileset.show= true;
      }
      else{
        tileset.show= false;

      }
      map.render()
    }
    else{
      let name = info.node.props.name;
      let child = info.node.getNodeChildren();
      titles = [];
      child.map(v => {
        getchildName(v.props)
      })

      let tp = [...inVisibleArr];
      if(info.checked){
        checkedKeys.push(key);
        //如果是叶子节点，移除一个
        if(child.length<1){
          let index = tp.indexOf('name');
          tp.splice(index,1);
        }
        //根节点，移除下属子节点
        else{
          titles.map( v => {
            tp.splice(tp.indexOf(v),1)
          })
        }

      }
      else{
        //不可见数组增加
        if(child.length<1){
          tp.push(name);
        }
        //根节点，增加下属子节点
        else{
          titles.map( v => {
            tp.push(v)
          })
        }

      }
      setInVisibleArr([...tp]);
      conditions = tp.map( v => ["${name} === '"+v+"'", 'rgba(${red}, ${green}, ${blue}, 0.0)'] );
      conditions.push(['true',  'rgba(${red}, ${green}, ${blue}, 1.0)']);
      tileset.style = new BOSGeo.Cesium3DTileStyle({
        color: {
          conditions: conditions
        }
      });
      map.render();
    }
    function getchildName(json) {
      if(json.children && json.children.length>0){
        json.children.map(
          v => {
            getchildName(v.props)
          });
      }
      else{
        titles.push(json.title)
      }
    }
    setKeys(checkedKeys);

  };
  return (
    <div className={styles.treeWrapper}>
      <Tree
        checkable
        ref={reftree}
        onSelect={onSelect}
        onCheck={onCheck}
        onExpand={onExpand}
        selectedKeys={highLightKeys}
        checkedKeys={selectedKeys}
        expandedKeys={expandKeys}
        treeData={treeDatacs}
        autoExpandParent
        multiple
      />
    </div>

  )
}

export default  TreeStyle

