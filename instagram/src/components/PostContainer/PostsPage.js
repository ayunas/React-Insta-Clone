import React from 'react';
import './PostContainer.css';
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'
import styled from 'styled-components';
import { Button } from 'reactstrap';

const Divvy = styled.div`
    text-align: right;
`;

const PostsPage = (props) => {

    return (
        <Divvy>
            <SearchBar data={props.data} search={props.search} />
            <Button color='danger' onClick={props.logout} size='lg'>Logout</Button>
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
        </Divvy>
    )
}

export default PostsPage;