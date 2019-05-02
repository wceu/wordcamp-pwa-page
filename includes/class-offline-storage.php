<?php
/**
 * The class responsible for configuring offline storage.
 *
 * @since 1.0.0
 *
 * @package    wordcamp-pwap
 * @subpackage wordcamp-pwap/includes
 */

namespace WordCamp\PWAPage;

/**
 * The class responsible for configuring offline storage.
 */
class OfflineStorage {

	/**
	 * Constructor.
	 */
	public function __construct() {

	}

	/**
	 * Configure offline settings for PWA behavior.
	 */
	public function configure() {

		include_once ABSPATH . 'wp-admin/includes/plugin.php';
		if ( ! is_plugin_active( 'pwa/pwa.php' ) ) {
			return;
		}

		add_filter( 'wp_service_worker_navigation_preload', '__return_false' );

		add_filter(
			'wp_service_worker_navigation_caching_strategy',
			function() {
				return \WP_Service_Worker_Caching_Routes::STRATEGY_STALE_WHILE_REVALIDATE;
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
			array(
				'strategy'  => \WP_Service_Worker_Caching_Routes::STRATEGY_CACHE_FIRST,
				'cacheName' => 'assets',
				'plugins'   => array(
					'expiration' => array(
						'maxEntries'    => 60,
						'maxAgeSeconds' => 60 * 60 * 24,
					),
				),
			)
		);
	}
}
