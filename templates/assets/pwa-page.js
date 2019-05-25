/**
 * External dependencies
 */
import { sortBy } from 'lodash';

/**
 * WordPress dependencies
 */
import { _x } from '@wordpress/i18n';
import { render } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { fetchSessions, fetchTracks, fetchPosts } from './api';
import { LatestPosts } from './components/posts';
import { SessionsGroup } from './components/sessions';

const now = new Date();

const processAndRenderScheduleData = ( data ) => {

	if ( ! Array.isArray( data.tracks ) ) {
		return;
	}//end if

	const tracks = data.tracks.map( ( track ) => {
		const sessionsInTrack = sortBy(
			data.sessions.filter(
				( session ) => session.session_track.includes( track.id )
			),
			( sessionInTrack ) => sessionInTrack.meta._wcpt_session_time
		);

		const indexOfNextSession = sessionsInTrack.findIndex(
			( session ) => now < new Date( session.meta._wcpt_session_time * 1000 )
		);

		const nextSession = sessionsInTrack[ indexOfNextSession ];
		const nowSession = sessionsInTrack[ indexOfNextSession - 1 ];

		return {
			track,
			now: nowSession,
			next: nextSession,
		};
	} );
	renderSchedule( tracks );
};

const renderSchedule = ( tracks ) => {

	const onNow = document.getElementById( 'on-now' );
	const upNext = document.getElementById( 'up-next' );

	const onNowSessions = tracks.map( ( track ) => {
		return {
			track: track.track,
			session: track.now,
		};
	} ).filter( ( sessionInTrack ) => !! sessionInTrack.session );
	const upNextSessions = tracks.map( ( track ) => {
		return {
			track: track.track,
			session: track.next,
		};
	} );

	if ( onNowSessions.length ) {
		render( <SessionsGroup sessions={ onNowSessions } title={ _x( 'On now', 'title', 'wordcamp-pwa-page' ) } />, onNow );
	}
	if ( upNextSessions.length ) {
		render( <SessionsGroup sessions={ upNextSessions } title={ _x( 'Up next', 'title', 'wordcamp-pwa-page' ) } />, upNext );
	}

};

const renderLatestPosts = ( posts ) => {
	const container = document.getElementById( 'latest-posts' );
	render( <LatestPosts posts={ posts } />, container );
};

const init = () => {
	Promise.all( [
		fetchSessions(),
		fetchTracks(),
		fetchPosts(),
	] )
		.then( ( data ) => {
			processAndRenderScheduleData( {
				sessions: data[ 0 ],
				tracks: data[ 1 ],
			} );
			renderLatestPosts( data[ 2 ] );
		} )
		.catch( ( error ) => {
			console.log( 'Error: ', error );
		} );
};
init();
setInterval( init, 60 * 1000 );
