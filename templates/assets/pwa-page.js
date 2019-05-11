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

// TODO Properly render tracks and sessions (current code just for debug)
const render = ( tracks ) => {
	const element = document.getElementById( 'pwa-page-content' );

	element.innerHTML += '<h1>Current Time: ' + now.toISOString() + '</h1>';
	element.innerHTML += '<h2>On now</h2>';

	tracks.forEach( ( track ) => {
		element.innerHTML += '<p>' + track.track.name + ' => (' + track.now.session_date_time.time + ') ' + track.now.title.rendered + '</p>';
	} );

	element.innerHTML += '<h2>Up next</h2>';

	tracks.forEach( ( track ) => {
		element.innerHTML += '<p>' + track.track.name + ' => (' + track.next.session_date_time.time + ') ' + track.next.title.rendered + '</p>';
	} );
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
