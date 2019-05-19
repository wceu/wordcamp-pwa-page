<?php
/**
 * The functions responsible for registering and tracking custom page templates.
 *
 * @since 1.0.0
 *
 * @package    wordcamp-pwap
 * @subpackage wordcamp-pwap/includes
 */

namespace WordCamp\PWAPage\Templates;

/**
 * File name of the PWA Homepage template.
 *
 * @var string
 */
const TEMPLATE_PWA_HOMEPAGE = 'template-pwa-home.php';

add_filter( 'theme_page_templates', __NAMESPACE__ . '\\add_pwa_homepage_template' );
add_filter( 'template_include', __NAMESPACE__ . '\\use_pwa_homepage_template' );
add_action( 'wp_enqueue_scripts',   __NAMESPACE__ . '\\enqueue_assets' );

/**
 * Adds the PWA Homepage template.
 *
 * @param string[] $page_templates Page templates.
 *
 * @return string[] Page templates.
 */
function add_pwa_homepage_template( array $page_templates ) {
	return array_merge(
		$page_templates,
		[ TEMPLATE_PWA_HOMEPAGE => 'PWA Style Homepage' ]
	);
}

/**
 * Load the PWA Homepage template file.
 *
 * @param string $page_template Current page template.
 *
 * @return string Page template.
 */
function use_pwa_homepage_template( string $page_template ) {
	if ( is_pwa_homepage_template() ) {
		$pwa_homepage_template = WCPWAP_PLUGIN_PATH . '/templates/' . TEMPLATE_PWA_HOMEPAGE;
		if ( is_readable( $pwa_homepage_template ) ) {
			return $pwa_homepage_template;
		}
	}

	return $page_template;
}

/**
 * Enqueues CSS and JS assets for our page template.
 */
function enqueue_assets() {
	if ( ! is_pwa_homepage_template() ) {
		return;
	}

	wp_enqueue_script(
		'wordcamp-pwa-page',
		WCPWAP_PLUGIN_URL . '/dist/pwa-page.js',
		[ 'lodash' ],
		filemtime( WCPWAP_PLUGIN_PATH . '/dist/pwa-page.js' ),
		true
	);

	wp_localize_script(
		'wordcamp-pwa-page',
		'wcpwa',
		[ 'apiUrl' => 'https://2019.europe.wordcamp.org/wp-json/' ] // TODO use get_rest_url() instead.
	);

	wp_enqueue_style(
		'wordcamp-pwa-page',
		WCPWAP_PLUGIN_URL . '/templates/assets/pwa-page.css',
		[],
		filemtime(  WCPWAP_PLUGIN_PATH . '/templates/assets/pwa-page.css' )
	);
}

/**
 * Helper function to determine if the current page is using the PWA Homepage template.
 *
 * @return bool Whether or not the current page is using the PWA Homepage template.
 */
function is_pwa_homepage_template() {
	return get_post_meta( get_the_ID(), '_wp_page_template', true ) === TEMPLATE_PWA_HOMEPAGE;
}
