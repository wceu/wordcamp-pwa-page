<?php
/**
 * The functions responsible for configuring offline storage.
 *
 * @since 1.0.0
 *
 * @package    wordcamp-pwap
 * @subpackage wordcamp-pwap/includes
 */

namespace WordCamp\PWAPage\PWA;

if ( ! class_exists( 'WP_Service_Worker_Caching_Routes' ) ) {
	return;
}

add_filter( 'wp_service_worker_navigation_preload', '__return_false' );

add_filter(
	'wp_service_worker_navigation_caching_strategy',
	function() {
		return \WP_Service_Worker_Caching_Routes::STRATEGY_NETWORK_FIRST;
	}
);

add_filter(
	'wp_service_worker_navigation_caching_strategy_args',
	function( $args ) {
		$args['cacheName']                           = 'pages';
		$args['plugins']['expiration']['maxEntries'] = 50;
		return $args;
	}
);

wp_register_service_worker_caching_route(
	'/wp-(content|includes)/.*\.(?:png|gif|jpg|jpeg|svg|webp|css|js)(\?.*)?$',
	[
		'strategy'  => \WP_Service_Worker_Caching_Routes::STRATEGY_CACHE_FIRST,
		'cacheName' => 'assets',
		'plugins'   => [
			'expiration' => [
				'maxEntries'    => 60,
				'maxAgeSeconds' => DAY_IN_SECONDS,
			],
		],
	]
);

wp_register_service_worker_caching_route(
	'/wp-json/.*',
	[
		'strategy'  => \WP_Service_Worker_Caching_Routes::STRATEGY_CACHE_FIRST,
		'cacheName' => 'rest-api',
		'plugins'   => [
			'expiration' => [
				'maxEntries'    => 60,
				'maxAgeSeconds' => 15 * MINUTE_IN_SECONDS,
			],
		],
	]
);
