/**
 * Internal dependencies
 */
import { Page } from './components/page';

/**
 * WordPress dependencies
 */
import { render } from '@wordpress/element';

const pwaPage = document.getElementById( 'pwa-root' );
render( <Page />, pwaPage );

// TODO delete this function. Only for testing purposes.
window.setDate = function( d ) {
	window.now = d;
};
