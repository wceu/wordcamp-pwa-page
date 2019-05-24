/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Post } from './post';

export class LatestPosts extends Component {

	render() {
		const { posts } = this.props;

		return (
			<>
				{ posts.map( ( post, index ) => {

					return (
						<Post key={ index } post={ post } />
					);
				} ) }
			</>
		);
	}

}
