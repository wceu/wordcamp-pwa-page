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
		<h2>{ title }</h2>
		{ sessions.map( ( session, index ) => {

			return (
				<Session key={ index } session={ session } />
			);
		} ) }
	</Fragment>

);
