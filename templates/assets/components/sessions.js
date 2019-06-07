/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Session } from './session';

export const SessionsGroup = ( { title, sessions } ) => (

	<Fragment>
		<h3>{ title }</h3>
		{ sessions.filter( ( session ) => !! session ).map( ( session ) => {

			return (
				<Session key={ session.id } session={ session } />
			);
		} ) }
	</Fragment>

);
