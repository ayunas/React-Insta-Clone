import React from 'react';
import './PostContainer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import heart from '../SearchBar/heart.png'
import speech from './speech.png'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import CommentSection from '../CommentSection/CommentSection';
library.add(faIgloo)


class PostContainer extends React.Component {

    render() {
        console.log(this.props.thumbnail);

        return (
            <div className='post-container'>
                <figure>
                    <img src={this.props.thumbnail} alt='avatar' className='thumbnail'/>
                    <figcaption id='username'>{this.props.user}</figcaption>
                </figure>
                
                <figure>
                    <img src={this.props.image} alt='image'></img>
                    <FontAwesomeIcon icon="heart" />

                    <div className='icon-container'>
                        <img src={heart} alt='heart' className='icon'/>
                        <img src={speech} alt='speech' className='icon'/>
                    </div>

                    <strong><em><figcaption>{this.props.likes} likes</figcaption></em></strong>
                    <em>{this.props.comments.map( comment => <figcaption>{comment}</figcaption> )}</em>
                    <strong>{this.props.userComments.map( comment => <figcaption>{comment}</figcaption> )}</strong>
                </figure>
                <CommentSection />
            </div>
            
        )
    }
}

export default PostContainer;


// {this.props.comments.map( comment => <figcaption key={this.props.id}>{comment.username} {comment.text}</figcaption>)}
