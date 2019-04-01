import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import CommentSection from './components/CommentSection/CommentSection'

class App extends Component {
  render() {
    return (
      <div className="App App">
        <SearchBar className="App-header"/>
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
