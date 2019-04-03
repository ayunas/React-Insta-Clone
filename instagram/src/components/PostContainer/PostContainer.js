import React from 'react';
import './PostContainer.css'
import heart from '../SearchBar/heart.png'
import speech from './speech.png'
import CommentSection from '../CommentSection/CommentSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartO } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';


class PostContainer extends React.Component {

    render() {

        return (
            <div className='post-container'>
                <figure>
                    <img src={this.props.thumbnail} alt='avatar' className='thumbnail'/>
                    <figcaption id='username'>{this.props.user}</figcaption>
                </figure>
                
                <figure>
                    <img src={this.props.image} alt='image'></img>

                    <div className='icon-container'>
                        <FontAwesomeIcon icon={faHeartO} size='2x' className='fa-icon'/>
                        <FontAwesomeIcon icon={faComment} size='2x' className='fa-icon'/>
                    </div>

                    <strong><em><figcaption>{this.props.likes} likes</figcaption></em></strong>
                    
                    <CommentSection comments = {this.props.comments} />
                    
                </figure>
                
                
            </div>
            
        )
    }
}

export default PostContainer;


// {this.props.comments.map( comment => <figcaption key={this.props.id}>{comment.username} {comment.text}</figcaption>)}
