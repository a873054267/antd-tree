import React,{Component,Fragment} from 'react';
import { connect } from 'dva';

import  './IndexPage.less';
import ModelTree from '../components/bimScene/modeltree/ModelTree.js'



class IndexPage extends Component {
  constructor(){
    super()
    this.state={
      setMenuOpen:false,
      isMapLoad:false,
    }
  }

  componentDidMount(){

  }

  render() {
    return (
      <Fragment>
        <ModelTree />
      </Fragment>

    )
  }
}



IndexPage.propTypes = {
};

export default IndexPage;
