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
		{ sessions.map( ( session, index ) => {

			return (
				<Session key={ index } session={ session } />
			);
		} ) }
	</Fragment>

);
