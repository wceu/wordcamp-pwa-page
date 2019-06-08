/**
 * WordPress dependencies
 */
import { _x } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { LoadingIndicator } from './ui/loading';
/**
 * External dependencies
 */
import { sortBy } from 'lodash';
import { SessionsGroup } from './sessions';

const getScheduleData = ( data ) => {

	const now = window.now || new Date();

	if ( ! Array.isArray( data.tracks ) ) {
		return;
	}//end if

	return data.tracks.map( ( track ) => {
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
};

export const Schedule = ( { sessionList, trackList } ) => {

	if ( sessionList.isFetching || trackList.isFetching ) {
		return <LoadingIndicator />;
	}

	const tracks = getScheduleData( { sessions: sessionList.data, tracks: trackList.data } );

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

	return <>
		{ onNowSessions.length ? <SessionsGroup sessions={ onNowSessions } title={ _x( 'On now', 'title', 'wordcamp-pwa-page' ) } /> : '' }
		{ upNextSessions.length && <SessionsGroup sessions={ upNextSessions } title={ _x( 'Up next', 'title', 'wordcamp-pwa-page' ) } /> }
	</>;
};
export default Schedule;
