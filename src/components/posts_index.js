import React, {Component} from 'react';
import {fetchPosts} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

class PostsIndex extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            Add new post
          </Link>
        </div>
      Posts!!

      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);
