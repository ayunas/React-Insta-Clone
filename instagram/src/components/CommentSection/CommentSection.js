import React from 'react';
import './CommentSection.css';
import moment from 'moment';


class CommentSection extends React.Component {
   
    constructor(props) {
        super(props)
        this.addNewComment = this.addNewComment.bind(this);
        this.state = {
            comments : this.props.comments.map(comment => comment.text),
            username : this.props.comments.map(comment => comment.username)
        }
    }

    addNewComment(e) {
        e.preventDefault();
        // console.log(e, 'this comment has been entered');
        // console.dir(e.target.children[0].value);
        // console.dir(this.state.comments);
        this.setState( {
            comments : this.state.comments.concat(e.target.children[0].value),
            username : this.state.username.concat('newuser')
        })

    }

    render() {
        const date = moment('2019-04-01').fromNow()
        return (
            <div id='commentsection'>
                
                <div className='users divvy'>
                    {this.state.username.map( user => <p className='user'><strong>{user} : </strong></p>)}
                </div>

                <div className='comments divvy'>
                    {this.state.comments.map( comment => <p className='comment'>{comment}</p>)}
                </div>
                
                <div className='form'>
                    <p>{date}</p>
                    <form onSubmit={this.addNewComment}>
                        <input id='comment' placeholder='Add a comment'/>
                    </form>
                </div>
                
            </div>
            
            
        )
    }
}


export default CommentSection;
