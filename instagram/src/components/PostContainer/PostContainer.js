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
    constructor(props) {
        super(props);
       this.state = {
           liked : false,
           tally : this.props.likes
       }
    }

    like = () => {
        
        console.log(this.state.liked);

        this.setState( {
            liked : !this.state.liked
        }, () => { 
            if (this.state.liked === true) {
            this.setState( {
                tally : this.state.tally + 1
            })
        } })

        console.log(this.state.liked);

        
    }

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
                        <FontAwesomeIcon icon={this.state.liked ? faHeart : faHeartO} size='2x' className='fa-icon' onClick={this.like}/>
                        <FontAwesomeIcon icon={faComment} size='2x' className='fa-icon'/>
                    </div>

                    <strong><em><figcaption>{this.state.tally} likes</figcaption></em></strong>
                    
                    <CommentSection comments = {this.props.comments} />
                    
                </figure>
                
                
            </div>
            
        )
    }
}

export default PostContainer;


// {this.props.comments.map( comment => <figcaption key={this.props.id}>{comment.username} {comment.text}</figcaption>)}
