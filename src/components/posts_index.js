import React, {Component} from 'react';
import {fetchPosts} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class PostsIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }

  render(){
    return (
      <div> Posts!!</div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);
