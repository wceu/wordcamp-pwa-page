/**
 * External dependencies
 */
import { keyBy, flatten } from 'lodash';

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

export class Post extends Component {

	render() {

		const { post } = this.props;
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
					<a href={ link }>{ stripHTML( title ) }</a>
				</h4>
				<span className="wordcamp-latest-post-date">{ new Date( date ).toLocaleDateString() }</span>
				<span className="wordcamp-latest-post-excerpt">{ stripHTML( excerpt ) }</span>
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
	}

}

const aux = document.createElement( 'div' );
function stripHTML( html ) {
	aux.innerHTML = html;
	return aux.textContent;
}
