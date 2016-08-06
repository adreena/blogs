import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPost} from '../actions/index';

class PostShow extends Component{

  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }
  render(){
    return(
      <div >{this.props.params.id}</div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPost},dispatch);
}

export default connect(null, mapDispatchToProps)(PostShow);
