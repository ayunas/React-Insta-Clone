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
      data : []
    }
  }

  render() {
    return (
      <div className='App'>
        <SearchBar />
        {this.state.data.map( post => <PostContainer 
        thumbnail={post.thumbnailUrl}
        image={post.imageUrl}
        likes={post.likes}
        user={post.username}
        comments={post.comments}
        id={post.id}
        /> ) }
      </div>
    );
  }

  componentDidMount() {
    this.setState( {
      data : dummyData
    });
  }
}

export default App;
