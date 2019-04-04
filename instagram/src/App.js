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
    console.log('searching...');
    const user = this.state.data.filter(post => post.username === e.target.children[0].value);
    console.log(user);

    if (user.length > 0) {
      this.setState( {
        data : user
      });
    } else if (user.length === 0) {
      this.setState ( {
        data : dummyData
      })
    }
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
