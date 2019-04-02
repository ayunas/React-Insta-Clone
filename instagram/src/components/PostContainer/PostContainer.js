import React from 'react';


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
