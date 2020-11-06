import React, { Component ,Fragment,useState,useEffect} from 'react';
import './Toolbox.less';
import  IconFont from '../../utils/IconFont'
import {SetMenu,LayerManage,Roam,Measure,Snapshot, Analysis, Draw} from './index'
import { Drawer} from 'antd';

//添加hook
const Toolbox = (props) => {
  /*---------------------------state块-------------------------------------*/
  /*****
   * state设置
   */
  let defaultSettings = [
    {
      visible:true,
      open:false,
      key:"LayerManage",
      name:"图层",
      className:"Geoicontoolbaricon_layer",
    },
    {
      visible:true,
      open:false,
      key:"Roam",
      name:"漫游",
      className:"Geoicontoolbaricon_wander"
    },
    {
      visible:true,
      open:false,
      key:"Snapshot",
      name:"快照",
      className:"Geoicontoolbaricon_Snapshot"
    },
    {
      visible:true,
      open:false,
      key:"Measure",
      name:"测量",
      className:'Geoicontoolbaricon_measure'
    },
    {
      visible:true,
      open:false,
      key:"Analysis",
      name:"分析",
      className:'Geoicontoolbaricon_analysis'

    },
    {
      visible:true,
      open:false,
      key:"Draw",
      name:"绘制",
      className:'Geoicontoolbaricon_draft'
    }

  ]
  let [itemList, setItem] = useState(defaultSettings);
  let [isMenuOpen,setMenuOpen] = useState(false);
  /*--------------------------中间处理-------------------------------------*/
  /***
   *
   * 循环渲染
   */

  /***
   *根据添加/删除对应的工具
   */
  let addCancelTools = (index) => {
    itemList[index].open = !(itemList[index].open);
    let data = [...itemList];
    setItem(data);
  };

  let leftDiv = [],rightDiv = [],openList = [];
  let targetDiv
  /*eslint-disable*/
  let com={
    "LayerManage":(index) =>  < LayerManage  addCancelTools={addCancelTools.bind(this,index)}/>,
    "Roam":(index) =>  < Roam  addCancelTools={addCancelTools.bind(this,index)}/> ,
    "Snapshot":(index) => < Snapshot  addCancelTools={addCancelTools.bind(this,index)}/> ,
    "Measure":(index) =>  < Measure  addCancelTools={addCancelTools.bind(this,index)}/> ,
    "Analysis":(index) =>  < Analysis  addCancelTools={addCancelTools.bind(this,index)}/> ,
    "Draw":(index) =>  < Draw  addCancelTools={addCancelTools.bind(this,index)}/> ,

  }
  itemList.map( (v,index) => {
    if(itemList[index].open){
      openList.push(com[itemList[index].key](index))
    }
    if( index < 3 ) {
      targetDiv = leftDiv;
    }
      else{
        targetDiv = rightDiv;
      }
      if(v.visible){
        targetDiv.push(
          <div  onClick = { e => addCancelTools(index)} className = {[v.open ? 'itemHighLight item':'item',(index==0 ||index==3)?'itemFirst':''].join(' ') } key = {v.key}>
            <IconFont  type={v.className} className = {'icon'}/>
            <span className = "text"> {v.name} </span>
          </div>
        )
      }
  })
  targetDiv = null ;


  /*---------------------------函数块-------------------------------------*/

  /*****
   * 关闭设置菜单面板
   */
 let setMenuClick = () => {
   setMenuOpen(!isMenuOpen)
  };
  /****
   * 根据索引将工具置为可见与否
   * @param index
   */
 let setToolsVisible = (index) => {
   itemList[index].visible = !itemList[index].visible;
   let data = [...itemList]
   setItem(data);
 };
  /***
   *恢复默认设置'
   */
 let recoveryDeault = () => {
   setItem(defaultSettings);
 };
  return (
    <Fragment>
      {openList}

      <div  className ='bosgeo-tool'>
       <div className="left itemWrapper">{leftDiv}</div>
      <div className ="internal itemWrapper"></div>
      <div className="left itemWrapper">{rightDiv}</div>
    </div>
      <div className="bosgeo-tool bosgeo-settings">
        <div className="itemWrapper" >
          <div className={isMenuOpen?"itemHighLight item":"item"}  onClick={setMenuClick}>
            <IconFont type={'Geoicontoolbaricon_setting'} className='icon'></IconFont>
            <span className="text">设置</span>
          </div>
        </div>
      </div>
      {isMenuOpen? <SetMenu setMenuClick={setMenuClick} itemListState={{itemList:itemList,setToolsVisible:setToolsVisible,recoveryDeault:recoveryDeault}} />:null}
    </Fragment>
  )
}

export default Toolbox
