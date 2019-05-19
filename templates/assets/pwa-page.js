const _ = require( 'lodash' );

// TODO use localized script data instead of hardcoded URL.
const apiRoot = 'https://2019.europe.wordcamp.org/wp-json';

// TODO get current date instead of hardcoded one.
const now = new Date( '2019-06-22T11:35:00Z' );

const processAndRenderData = ( data ) => {

	const tracks = data.tracks.map( ( track ) => {
		const sessionsInTrack = _.sortBy(
			_.filter(
				data.sessions,
				( session ) => session.session_track.includes( track.id )
			),
			( sessionInTrack ) => sessionInTrack.meta._wcpt_session_time
		);

		const indexOfNextSession = _.findIndex(
			sessionsInTrack,
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
	render( tracks );
};

const render = ( tracks ) => {

	const onNow = document.getElementById( 'on-now' );
	const upNext = document.getElementById( 'up-next' );

	tracks.forEach( ( track ) => {
		renderSession( track.now, track.track, onNow );
		renderSession( track.next, track.track, upNext );
	} );

};

const renderSession = ( session, track, container ) => {

	const sessionContainer = document.createElement( 'div' );
	sessionContainer.setAttribute( 'class', 'wordcamp-schedule-session' );

	renderSessionTitle( session, sessionContainer );
	renderSessionTrack( track, sessionContainer );
	renderSessionSpeakers( session, sessionContainer );
	renderSessionCategory( session, sessionContainer );

	container.appendChild( sessionContainer );

};

const renderSessionTitle = ( session, container ) => {

	const title = document.createElement( 'h4' );
	title.setAttribute( 'class', 'wordcamp-schedule-session-title' );

	const titleLink = document.createElement( 'a' );
	titleLink.setAttribute( 'href', session.link );
	titleLink.innerHTML = session.title.rendered;

	title.appendChild( titleLink );
	container.appendChild( title );

};

const renderSessionTrack = ( track, container ) => {
	const trackName = document.createElement( 'span' );
	trackName.setAttribute( 'class', 'wordcamp-schedule-session-track' );
	trackName.innerHTML = track.name;
	container.appendChild( trackName );
};

const renderSessionSpeakers = ( session, container ) => {

	const speakers = document.createElement( 'span' );
	speakers.setAttribute( 'class', 'wordcamp-schedule-session-speaker' );

	if ( session._embedded.speakers ) {
		session._embedded.speakers.forEach( ( speaker ) => {
			const speakerLink = document.createElement( 'a' );
			speakerLink.setAttribute( 'href', speaker.link );
			speakerLink.innerHTML = speaker.title.rendered;
			speakers.appendChild( speakerLink );
		} );
	}//end if

	container.appendChild( speakers );

};

const renderSessionCategory = ( session, container ) => {

	const category = document.createElement( 'span' );
	category.setAttribute( 'class', 'wordcamp-schedule-session-category' );

	const terms = _.keyBy( _.flatten( session._embedded[ 'wp:term' ] ), 'id' );
	if ( session.session_category.length > 0 ) {
		const sc = session.session_category[ 0 ];
		const term = terms[ sc ];
		category.innerHTML = term.name;
	}//end if

	container.appendChild( category );

};

const init = () => {
	Promise.all( [
		fetch( apiRoot + '/wp/v2/sessions?status=publish&_embed=true&per_page=100' ).then( ( response ) => response.json() ),
		fetch( apiRoot + '/wp/v2/session_track?status=publish&per_page=100' ).then( ( response ) => response.json() ),
	] )
		.then( ( data ) => {
			processAndRenderData( {
				sessions: data[ 0 ],
				tracks: data[ 1 ],
			} );
		} )
		.catch( ( error ) => {
			console.log( 'Error: ', error );
		} );
};
init();
