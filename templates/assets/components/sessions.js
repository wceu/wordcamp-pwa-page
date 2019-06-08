/**
 * Internal dependencies
 */
import { Session } from './session';

export const SessionsGroup = ( { title, sessions } ) => <>
	<h3>{ title }</h3>
	{ sessions.filter( ( session ) => !! session ).map( ( session ) => <Session key={ `${ session.session.id }-${ session.track.id }` } session={ session } /> ) }
</>;
