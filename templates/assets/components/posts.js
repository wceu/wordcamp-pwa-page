/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Post } from './post';

export const LatestPosts = ( { posts } ) => (

	<Fragment>
		{ posts.map( ( post, index ) => {

			return (
				<Post key={ index } post={ post } />
			);
		} ) }
	</Fragment>

);
