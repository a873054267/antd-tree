import React,{useState ,useEffect} from 'react'
import  IconFont from '../../../utils/IconFont';
import  apis from '../../../services/api'
import  Utils from '../../../utils/Utils';
import ProfessionTree from './professiontree/ProfessionTree';
import SystemTree from './systemtree/SystemTree';
import SpatialTree from './spatialtree/SpatialTree';
import { Input ,Tree,Tabs  } from 'antd';
import Header from '../../header/Header'
import styles from  './ModelTree.less';
import { connect } from 'dva';
import axios from 'axios';

const { Search } = Input;
const { TabPane } = Tabs;

let ModelTree = (props) => {
  let {headername,addCancelTools} =props;

  let [modelKeys,setModelKeys] = useState({});
  let [searchValue,setSearchValue] =useState('');
  let rootName = '两栋B2';

  //初始请求modelkey
  useEffect( e => {
     axios.get(apis.getFileKey('k3e7b4b6873945aeb5298333996b931a','M1603353511318')).then(res => {
        let tp = {};
        res.data.data.map(v => {
          switch (v.name){
            case '专业树':
              // axios.get(apis.getTreeInfo)
              tp.zys = v.fileKey;
              break;
            case '空间树':
              tp.kjs = v.fileKey;
              break
            case  '系统树':
              tp.xts = v.fileKey;
              break
          }
        });
        //存储modelKey
        setModelKeys({...tp});
      })
  },[]);
  let searchTree = value => {
      //console.log(value);
    setSearchValue(value)
  }

  return (
    <div id="bosgeo-modetree" className="popup">
      <Header headername={headername} addCancelTools={addCancelTools}/>
      <div className="firstWrapper">
        <div className="search">
          <Search placeholder="请输入选项名称" onSearch={searchTree} enterButton />
        </div>
        <div className={styles.content}>
          <Tabs defaultActiveKey="1"  style={{width:'326px'}}>
            <TabPane tab="空间树" key="1">
              <SpatialTree  filekey={modelKeys.kjs} rootName={rootName} searchValue={searchValue} setSearchValue={setSearchValue}/>
            </TabPane>
            <TabPane tab="系统树" key="2">
              <SystemTree  filekey={modelKeys.xts} rootName={rootName} searchValue={searchValue}/>
            </TabPane>
            <TabPane tab="专业树" key="3">
              <ProfessionTree  filekey={modelKeys.zys} rootName={rootName} searchValue={searchValue}/>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default  ModelTree

