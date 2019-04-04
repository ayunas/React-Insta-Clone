import React from 'react';
import './PostContainer.css';
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'

const PostsPage = (props) => {
    
    console.log(props);

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
        </div>


    )
}

export default PostsPage;