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

  search = (e) => {
    e.preventDefault();
    console.dir(e.target.children[0].value);
    console.log('searching...');
    console.log(this.state.data[0].username);
    const user = this.state.data.filter(post => post.username === e.target.children[0].value);
    console.log(user);
    this.setState( {
      data : user
    });
    // const id = user[0].id;
}

  render() {
    return (
      <div className='App'>
        <SearchBar data={this.state.data} search={this.search} />
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
