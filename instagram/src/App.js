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
      data : {dummyData}
    }
  }

  render() {
    console.dir(this.state.data.dummyData[0].imageUrl);
    return (
      <div>
        <SearchBar />
        
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
