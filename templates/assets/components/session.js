/**
 * External dependencies
 */
import { keyBy, flatten } from 'lodash';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

export class Session extends Component {

	render() {

		const { session } = this.props;
		const {
			session: {
				link,
				title: {
					rendered: title,
				},
				session_date_time: {
					time,
				},
				session_category: sessionCategories,
				_embedded: {
					'wp:term': embeddedTerms,
					speakers = [],
				},
			},
			track: {
				name: trackName,
			},
		} = session;

		const terms = keyBy( flatten( embeddedTerms ), 'id' );
		let categoryName;

		if ( sessionCategories.length > 0 ) {
			const sc = sessionCategories[ 0 ];
			categoryName = terms[ sc ].name;
		}//end if

		return (
			<div className="wordcamp-schedule-session">
				<span className="wordcamp-schedule-session-track">{ trackName }</span>
				<h4 className="wordcamp-schedule-session-title">
					<a href={ link }>{ stripHTML( title ) }</a>
				</h4>
				<span className="wordcamp-schedule-session-time">{ time }</span>
				<span className="wordcamp-schedule-session-speaker">
					{
						!! speakers.length && speakers.map( ( speaker, index ) => {
							const {
								title: {
									rendered: name,
								},
								link: speakerLink,
							} = speaker;

							return (
								<a key={ index } href={ speakerLink }>{ stripHTML( name ) }</a>
							);
						} )
					}
				</span>
				{ !! categoryName && (
					<span className="wordcamp-schedule-session-category">{ categoryName }</span>
				) }
			</div>
		);
	}

}

const aux = document.createElement( 'div' );
function stripHTML( html ) {
	aux.innerHTML = html;
	return aux.textContent;
}
