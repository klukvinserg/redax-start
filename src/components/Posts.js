import React from 'react';
import { connect } from 'react-redux';
import Post from './Post'

function Posts ({data}) {
 
    if(!data.length) {
        return <p>empty posts</p>
    }

    return (
        data.map(post => <Post post={post} key={post.id} />)
    )
}


const mapStateToProps = state => {
  

    return {
        data: state.posts.data
    }
}

export default connect(mapStateToProps, null) (Posts);