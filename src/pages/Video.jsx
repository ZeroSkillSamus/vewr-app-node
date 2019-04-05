import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Typography } from '@material-ui/core';
import CommentBox from '../components/commentbox';
import { withRouter } from 'react-router';
import OtherVid from '../components/otherVids';

var data = [
	{ img: 'peteHunt', author: 'Pete Hunt', text: 'Yerrrr' },
	{ img: 'jordanWalke', author: 'Jordan Walke', text: 'Looking Good' },
	{ img: 'peteHunt', author: 'Pete Hunt', text: 'Hi my name is Abraham Mitchell I am testing the comment box for some reason' },
	{ img: 'peteHunt', author: 'Pete Hunt', text: 'Damn it is not looking so bad I am falling in love already' },
	{ img: 'jaredChua', author: 'JChua447', text: 'I am fucking useless yeaaaaaa weeeeeeeeeeeeeeeeeeeeeeeeee' }
];

class Video extends Component {
	render() {
		return (
			<div className='allOfIT'>
				<div className='videoPlayer'>
					<div className='textBeforeVid'>
						<Typography component='h2' variant='display2'>
							Vewr Pre-Alpha
						</Typography>
						<Typography component='h2' variant='caption'>
							Posted by Abraham Mitchell
						</Typography>
					</div>
					<div className='video'>
						<ReactPlayer width='900px' height='550px' controls url='https://ipfstube.erindachtler.me/ipfs/QmU1GSqu4w29Pt7EEM57Lhte8Lce6e7kuhRHo6rSNb2UaC' />
					</div>
					<div className='commentBox'>
						<CommentBox data={data} />
					</div>
				</div>
				<div className='testIG'>
					<div className='videosOnSide'>
						<OtherVid />
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Video);
