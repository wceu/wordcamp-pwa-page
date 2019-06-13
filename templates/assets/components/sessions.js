/**
 * Internal dependencies
 */
import { Session } from './session';

export const SessionsGroup = ( { title, sessions } ) => <>
	<h3>{ title }</h3>
	{
		sessions.filter( ( session ) => !! session ).map( ( session, index ) => {
			const sessionKey = session.session ? session.session.id : index;

			return <Session
				key={ `${ sessionKey }-${ session.track.id }` }
				session={ session }
			/>;
		}
		)
	}
</>;
