/**
 * External dependencies
 */
import { keyBy, flatten } from 'lodash';

/**
 * WordPress dependencies
 */
import { stripTagsAndEncodeText } from '@wordpress/sanitize';

export const Session = ( { session } ) => {

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
			meta: {
				_wcpt_session_type: sessionType = '',
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
		<div className={ `wordcamp-schedule-session ${ sessionType }` }>
			<span className="wordcamp-schedule-session-track">{ trackName }</span>
			<h4 className="wordcamp-schedule-session-title">
				<a href={ link }>{ stripTagsAndEncodeText( title ) }</a>
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
							<a key={ index } href={ speakerLink }>{ stripTagsAndEncodeText( name ) }</a>
						);
					} )
				}
			</span>
			{ !! categoryName && (
				<span className="wordcamp-schedule-session-category">{ categoryName }</span>
			) }
		</div>
	);
};
