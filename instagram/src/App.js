import React, { Component } from 'react';
import dummyData from './dummy-data';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import CommentSection from './components/CommentSection/CommentSection'

class App extends Component {

  constructor() {
    super();
    this.state = {
      data : dummyData,
    }
  }

  render() {
    return (
      <div>
        <SearchBar />
        {this.state.data.map( post => <PostContainer 
        thumbnail={post.thumbnailUrl}
        image={post.imageUrl}
        likes={post.likes}
        user={post.username}
        comments={post.comments.map( comment => comment.text)}
        userComments={post.comments.map( comment => comment.username )}
        id={post.id}
        /> ) }
        <CommentSection />
      </div>
    );
  }
}

export default App;
