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
		{ posts.filter( ( post ) => !! post ).map( ( post ) => {

			return (
				<Post key={ post.id } post={ post } />
			);
		} ) }
	</Fragment>

);
