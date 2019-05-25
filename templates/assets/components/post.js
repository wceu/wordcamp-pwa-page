/**
 * External dependencies
 */
import { keyBy, flatten } from 'lodash';

/**
 * WordPress dependencies
 */
import { stripTagsAndEncodeText } from '@wordpress/sanitize';

export const Post = ( { post } ) => {

	const {
		date_gmt: date,
		link,
		title: {
			rendered: title,
		},
		excerpt: {
			rendered: excerpt,
		},
		_embedded: {
			'wp:term': embeddedTerms,
		},
		categories,
	} = post;

	const terms = keyBy( flatten( embeddedTerms ), 'id' );

	return (
		<div className="wordcamp-latest-post">
			<h4 className="wordcamp-latest-post-title">
				<a href={ link }>{ stripTagsAndEncodeText( title ) }</a>
			</h4>
			<span className="wordcamp-latest-post-date">{ new Date( date ).toLocaleDateString() }</span>
			<span className="wordcamp-latest-post-excerpt">{ stripTagsAndEncodeText( excerpt ) }</span>
			<span className="wordcamp-latest-post-categories">
				{
					categories.length && categories.map( ( c, index ) => {
						const term = terms[ c ];
						const {
							name,
							link: categoryLink,
						} = term;

						return (
							<a key={ index } href={ categoryLink }>{ name }</a>
						);
					} )
				}
			</span>
		</div>
	);

};
