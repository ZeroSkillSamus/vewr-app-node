import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CommentList from './commentList';

class CommentBox extends Component {
	state = {};
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p />
				<CommentList data={this.props.data} />
			</div>
		);
	}
}

CommentBox.propTypes = {
	classes: PropTypes.object.isRequired
};

export default CommentBox;
