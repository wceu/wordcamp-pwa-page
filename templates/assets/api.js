/**
 * WordPress dependencies
 */
import { apiFetch } from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

const apiRoot = 'https://2019.europe.wordcamp.org/wp-json/';

const isDevelopment = ! process.env.NODE_ENV || process.env.NODE_ENV === 'development';

function fetchData( path ) {
	if ( isDevelopment ) {
		return fetch( `${ apiRoot }${ path }` ).then( ( response ) => response.json() );
	}
	return apiFetch( { path } );
}

export function fetchSessions() {
	return fetchData( addQueryArgs( `wp/v2/sessions`, {
		per_page: 100,
		status: 'publish',
		_embed: true,
	} ) );
}

export function fetchTracks() {
	return fetchData( addQueryArgs( `wp/v2/session_track`, {
		per_page: 100,
		status: 'publish',
	} ) );
}

export function fetchPosts() {
	return fetchData( addQueryArgs( `wp/v2/posts`, {
		per_page: 3,
		status: 'publish',
		_embed: true,
	} ) );
}
