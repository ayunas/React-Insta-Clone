import React, { Component } from 'react';
import dummyData from './dummy-data';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import CommentSection from './components/CommentSection/CommentSection'
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';
import styled from 'styled-components';


const AuthenticatedComponent = withAuthenticate(PostsPage);
const Divvy = styled.div`
height: 100%;
padding: 30px 10px;
margin: 30px 30px 0 30px;
`;

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

  logout = () => {
    localStorage.clear();
    console.log('you are logged out');
    console.log(localStorage);
    window.location.reload();
    // this.setState( {
    //   data : []
    // });
  }


  render() {
    return (
      <Divvy className='App'>
        { (localStorage.length === 2 && localStorage.username !== '' && localStorage.password !== '') ? <AuthenticatedComponent data={this.state.data} search={this.search} logout={this.logout} /> : <Login /> }
      </Divvy>
    );
  }

  componentDidMount() {
    this.setState( {
      data : dummyData
    });
  }
}

export default App;
