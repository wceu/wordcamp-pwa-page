/**
 * Internal dependencies
 */
import { Post } from './post';
import { LoadingIndicator } from './ui/loading';

export const LatestPosts = ( { list } ) => {
	const { isFetching, data } = list;

	if ( isFetching && data.length === 0 ) {
		return <LoadingIndicator />;
	}

	return <>
		{
			data.filter( ( post ) => !! post ).map(
				( post ) => <Post key={ post.id } post={ post } />
			)
		}
	</>;
};
export default LatestPosts;
