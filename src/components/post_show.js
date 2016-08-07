import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPost} from '../actions/index';

class PostShow extends Component{

  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }
  render(){
    if(!this.props.post){
        return <div>Loading ...</div>
    }
    return(
      <div>
        <h3>{this.props.post.title}</h3>
        <h6>Categories: {this.props.post.categories}</h6>
        <p>{this.props.post.content}</p>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPost},dispatch);
}

function mapStateToProps(state){
  return {post: state.posts.post};
}
export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
