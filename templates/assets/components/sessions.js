/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Session } from './session';

export class SessionsGroup extends Component {

	render() {
		const {
			title,
			sessions,
		} = this.props;

		return (
			<>
				<h2>{ title }</h2>
				{ sessions.map( ( session, index ) => {

					return (
						<Session key={ index } session={ session } />
					);
				} ) }
			</>
		);
	}

}
