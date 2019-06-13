/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { _x } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { fetchSessions, fetchTracks, fetchPosts } from '../api';
import { LatestPosts } from './posts';
import { Schedule } from './schedule';

/**
 * Update every x seconds.
 *
 * @type {number}
 */
const UPDATE_INTERVAL = 60 * 1000;

const entityLists = {
	sessionList: fetchSessions,
	trackList: fetchTracks,
	postList: fetchPosts,
};

const DEFAULT_CONFIG = {
	urls: {},
};

class Page extends Component {

	constructor( props ) {
		super( props );

		const config = window.WCPWAP || {};
		this.updateInterval = -1;
		this.state = {
			config: { ...DEFAULT_CONFIG, ...config },
		};

		for ( const listName of Object.keys( entityLists ) ) {
			this.state[ listName ] = {
				isFetching: true,
				error: null,
				data: [],
			};
		}
	}

	updateLists() {
		for ( const listName of Object.keys( entityLists ) ) {
			entityLists[ listName ]().then( ( data ) => {
				this.setState( { [ listName ]: { isFetching: false, data } } );
			} ).catch( ( err ) => this.setState( ( state ) => ( {
				...state,
				[ listName ]: {
					...state[ listName ],
					isFetching: false,
					error: err,
				},
			} ) ) );
		}
	}

	componentDidMount() {
		this.updateLists();

		this.updateInterval = window.setInterval( this.updateLists, UPDATE_INTERVAL );
	}

	componentWillUnmount() {
		window.clearInterval( this.updateInterval );
	}

	render() {
		const { postList, sessionList, trackList, config } = this.state;

		return <>
			<div className="pwa-page-content">
				<Schedule sessionList={ sessionList } trackList={ trackList } />

				<a href={ config.urls.schedule } className="full-schedule">
					{ _x( 'View Full Schedule', 'text', 'wordcamp-pwa-page' ) }
				</a>
			</div>

			<div className="pwa-page-content">
				<h2>{ _x( 'Latest Posts', 'title', 'wordcamp-pwa-page' ) }</h2>
				<LatestPosts list={ postList } />

				<a href={ config.urls.posts } className="all-posts">
					{ _x( 'View all Posts', 'title', 'wordcamp-pwa-page' ) }
				</a>
			</div>
		</>;
	}

}

export default Page;
