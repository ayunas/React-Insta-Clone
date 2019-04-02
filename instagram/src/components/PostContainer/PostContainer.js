import React from 'react';


class PostContainer extends React.Component {

    render() {
        console.log(this.props);

        return (
            <figure>
                <img src='#' alt='avatar'/>
                <figcaption>{this.props.likes} likes</figcaption>
                <figcaption>{this.props.user}</figcaption>
                {this.props.comments.map( comment => <figcaption>{comment}</figcaption> )}
                {this.props.userComments.map( comment => <figcaption>{comment}</figcaption> )}
            </figure>
        )
    }
}

export default PostContainer;


// {this.props.comments.map( comment => <figcaption key={this.props.id}>{comment.username} {comment.text}</figcaption>)}
