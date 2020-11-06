import  React,{ useState} from 'react'
import { Icon ,Button} from 'antd';
import IconFont from '../../../utils/IconFont'
//添加hook
const SetMenu = (props) => {

  let toolsList = props.itemListState.itemList;

  let setToolsVisible= props.itemListState.setToolsVisible;
  let recoveryDeault = props.itemListState.recoveryDeault;

  let  divList=toolsList.map( (v,index) => {
    return (
      <div className={index==0?"item itemFirst":" item"} key={v.key}>
        <div className={['itemImage',v.visible ? 'highlight':""].join(' ')}>
          <IconFont type={v.className}  className={'icon'} />
        </div>
        <div className = {['name',v.visible ? 'highlight':""].join(' ')} >{v.name}</div>
        <div className="openFlag"  onClick={setToolsVisible.bind(this,index)}>
          <IconFont type={v.visible?"Geoiconswitch_open":"Geoiconswitch_close"} className="iconfont"></IconFont>
        </div>
      </div>
    )
  })

  return (<div id="bosgeo-setmenu" className="popup">
    <div className="header">
      <div className="image"></div>
      <div className="name">系统设置</div>
      <div className="close" onClick={props.setMenuClick}>
        <IconFont type={'Geoiconpanelheader_close'}  />

      </div>
    </div>
    <div className="firstWrapper">
      <div className="select">
        <div className="image"></div>
        <div className="text">工具栏配置</div>
      </div>
      <div className="content">
        {divList}
      </div>
      <div className="bottom">
        <Button  className="btn"  type="primary" onClick={recoveryDeault} >恢复本页默认设置</Button>
        {/*<input type="button" className="btn" value="恢复本页默认设置"/>*/}
      </div>
    </div>

  </div>)
}

export default SetMenu
