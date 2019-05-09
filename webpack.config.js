/**
 * WordPress dependencies
 */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const isProduction = defaultConfig.mode === 'production';

module.exports = [

	{
		...defaultConfig,
		entry: {
			'pwa-page': './templates/assets/pwa-page',
		},
		output: {
			filename: '[name].js',
		},
	},

];

