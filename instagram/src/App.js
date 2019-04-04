import React, { Component } from 'react';
import dummyData from './dummy-data';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import CommentSection from './components/CommentSection/CommentSection'
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './components/Authentication/withAuthenticate';

const AuthenticatedComponent = withAuthenticate(PostsPage);

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
        {/* <PostsPage data={this.state.data} search={this.search} /> */}
        <AuthenticatedComponent data={this.state.data} search={this.search} />
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
