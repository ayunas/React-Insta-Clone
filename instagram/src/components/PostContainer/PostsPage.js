import React from 'react';
import './PostContainer.css';
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'
import styled from 'styled-components';


const Divvy = styled.div`
    text-align: left;
`;

const PostsPage = (props) => {

    return (
        <div>
            <SearchBar data={props.data} search={props.search} />
        {
            props.data.map( post => <PostContainer 
            thumbnail={post.thumbnailUrl}
            image={post.imageUrl}
            likes={post.likes}
            user={post.username}
            comments={post.comments}
            id={post.id}
            /> 
            ) 
        }
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}

export default PostsPage;