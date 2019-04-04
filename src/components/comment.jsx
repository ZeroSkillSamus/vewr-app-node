import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		flexGrow: 1,
		overflow: 'hidden',
		padding: `0 ${theme.spacing.unit * 3}px`
	},
	paper: {
		padding: theme.spacing.unit * 2,
		width: `${830}px;`
	},
	bigAvatar: {
		width: 60,
		height: 60
	}
});

class Comment extends Component {
	state = {};
	constructor(props) {
		super(props);
	}
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root} className='testMore'>
				<Paper className={classes.paper}>
					<Grid container wrap='nowrap' spacing={16}>
						<Grid item>
							<Avatar src={require(`./${this.props.img}.jpg`)} className={classes.bigAvatar} />
						</Grid>
						<Grid item xs zeroMinWidth>
							<Typography variant='title' className='authorText' noWrap>
								{this.props.author}
							</Typography>
							<Typography className='commentText' noWrap>
								{this.props.children}
							</Typography>
						</Grid>
					</Grid>
				</Paper>
			</div>
		);
	}
}

export default withStyles(styles)(Comment);
