import React, { Component } from 'react';
import Comment from './comment';

class CommentList extends Component {
	state = {};
	render() {
		var commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment img={comment.img} author={comment.author}>
					{comment.text}
				</Comment>
			);
		});
		return <div className='commentList'>{commentNodes}</div>;
	}
}

export default CommentList;
