import React from 'react';
import './CommentSection.css';
import moment from 'moment';


class CommentSection extends React.Component {
   
    constructor(props) {
        super(props)
        this.state = {
            comments : this.props.comments.map(comment => comment.text),
            username : this.props.comments.map(comment => comment.username)
        }
    }

    render() {
        const date = moment('2019-04-01').fromNow()
       
        return (
            <div>
                {this.state.comments.map( comment => <p>{comment}</p>)}
                {this.state.username.map( user => <p><strong>{user}</strong></p>)}
                <p>{date}</p>
                <input id='comment' placeholder='Add a comment'/>
            </div>
            
            
        )
    }
}


export default CommentSection;
