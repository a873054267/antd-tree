import React,{usestate,createRef } from 'react'
import  IconFont from '../../utils/IconFont'

let Header = (props) => {
  let addCancelTools = props.addCancelTools;
  let headername = props.headername;
  let moveFlag = false ;
  let headerRef = createRef();

  let popupEle;
  let offsetleft,offsetTop,startPoint
  let cover = document.getElementById('coverForDrag');
  if(!cover){
    cover = document.createElement('div');
    cover.id = 'coverForDrag';
    document.body.appendChild(cover)
  }
  let processMouseDown = e => {
    moveFlag = true;
    cover.style.index = 8;
    popupEle = headerRef.current.parentElement
    startPoint = {x:e.clientX,y:e.clientY};
    offsetleft = popupEle.offsetLeft;
    offsetTop = popupEle.offsetTop;

  }
  let processMouseMove = e => {
    if(moveFlag){
      popupEle.style.left = offsetleft+(e.clientX-startPoint.x) +'px';
      popupEle.style.top = offsetTop+(e.clientY-startPoint.y) +'px';
    }
  }
  let processMouseUp = e => {
    cover.style.index = -1;
    moveFlag = false;
  }
  return (
    <div className="header" onMouseDown={processMouseDown}  onMouseUp={ processMouseUp} onMouseMove={processMouseMove} ref={headerRef} >
      <div className="image"></div>
      <div className="name">{headername}</div>
      {/*<div className="flod">*/}
        {/*<IconFont type={'Geoiconpackup'}></IconFont>*/}
      {/*</div>*/}
      <div className="close" onClick={addCancelTools}>
        <IconFont type={'Geoiconpanelheader_close'} className='icon' ></IconFont>
      </div>

    </div>
  )

}
export default  Header
