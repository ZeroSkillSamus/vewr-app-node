import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		height: 250,
		width: 250
	},
	control: {
		padding: theme.spacing.unit * 2
	},
	img: {
		width: '250px',
		height: '200px'
	}
});

class OtherVids extends Component {
	state = {
		spacing: '40'
	};

	handleChange = key => (event, value) => {
		this.setState({
			[key]: value
		});
	};
	render() {
		const { classes } = this.props;
		const { spacing } = this.state;

		return (
			<Grid container className={classes.root} spacing={100000}>
				<Grid item xs={12}>
					<Grid container className={classes.demo} justify='center' spacing={Number(spacing)}>
						{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(value => (
							<Grid key={value} item>
								<Paper className={classes.paper}>
									<div className='imageForThumbnails'>
										<img className={classes.img} src={require('./blueImage.jpg')} />
										<Typography className='textForThumbnails' variant='title'>
											Video
										</Typography>
									</div>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(OtherVids);
