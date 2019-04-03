import React from 'react';
import './PostContainer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import heart from '../SearchBar/heart.png'
import speech from './speech.png'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';
library.add(faIgloo);



class PostContainer extends React.Component {

    render() {
        const date = moment('2019-04-01').fromNow()

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
                    <CommentSection comments = {this.props.comments} />
                </figure>
                <p>{date}</p>
                
            </div>
            
        )
    }
}

export default PostContainer;


// {this.props.comments.map( comment => <figcaption key={this.props.id}>{comment.username} {comment.text}</figcaption>)}
