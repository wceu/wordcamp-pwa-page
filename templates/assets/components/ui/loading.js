/**
 * WordPress dependencies
 */
import { _x } from '@wordpress/i18n';

export const LoadingIndicator = () => {
	return (
		<div className="wordcamp-loading">
			{ _x( 'Loading...', 'pwa-placeholder', 'wordcamp-pwa-page' ) }
		</div>
	);
};
