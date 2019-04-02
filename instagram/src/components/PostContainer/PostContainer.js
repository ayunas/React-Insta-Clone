import React from 'react';
import './PostContainer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import heart from '../SearchBar/heart.png'
import speech from './speech.png'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'
library.add(faIgloo)


class PostContainer extends React.Component {

    render() {
        console.log(this.props.thumbnail);

        return (
            <div>
                <figure>
                    <img src={this.props.thumbnail} alt='avatar'/>
                    <figcaption>{this.props.user}</figcaption>
                </figure>
                
                <figure>

                    <img src={this.props.image} alt='image'></img>
                    <FontAwesomeIcon icon="heart" />
                    <img src={heart} alt='heart' className='icon'/>
                    <img src={speech} alt='speech' className='icon'/>

                    <figcaption>{this.props.likes} likes</figcaption>
                    {this.props.comments.map( comment => <figcaption>{comment}</figcaption> )}
                    {this.props.userComments.map( comment => <figcaption>{comment}</figcaption> )}
                </figure>
            </div>
            
        )
    }
}

export default PostContainer;


// {this.props.comments.map( comment => <figcaption key={this.props.id}>{comment.username} {comment.text}</figcaption>)}
