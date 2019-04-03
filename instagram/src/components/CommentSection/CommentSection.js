import React from 'react';
import './CommentSection.css';


class CommentSection extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            comments : this.props.comments.map(comment => comment.text),
            username : this.props.comments.map(comment => comment.username)
        }
    }

    render() {

        return (
            <div>
                {this.state.comments.map( comment => <p>{comment}</p>)}
                {this.state.username.map( user => <p><strong>{user}</strong></p>)}
                <input id='comment' placeholder='Add a comment'/>
            </div>
            
            
        )
    }
}


export default CommentSection;
