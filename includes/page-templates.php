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

add_filter( 'theme_page_templates', __NAMESPACE__ . '\\add_new_template' );
add_filter( 'template_include',     __NAMESPACE__ . '\\view_project_template' );
add_action( 'wp_enqueue_scripts',   __NAMESPACE__ . '\\enqueue_assets' );

/**
 * Adds template to the attributes metabox.
 */
function add_new_template( array $posts_templates ) {
	$posts_templates = array_merge(
		$posts_templates,
		[
			'template-pwa-home.php' => 'PWA Style Homepage',
		]
	);
	return $posts_templates;
}

/**
 * Determines if the page has our template assigned and return it's path.
 */
function view_project_template( string $template ) {
	global $post;

	if ( ! is_current_page_using_template( 'template-pwa-home.php' ) ) {
		return $template;
	}

	$file = WCPWAP_PLUGIN_PATH . '/templates/' . get_post_meta( $post->ID, '_wp_page_template', true );

	// Just to be safe, we check if the file exists and is readable first.
	if ( is_readable( $file ) ) {
		return $file;
	}

	return $template;
}

/**
 * Enqueues CSS and JS assets for our page template.
 */
function enqueue_assets() {
	if ( is_current_page_using_template( 'template-pwa-home.php' ) ) {
		wp_enqueue_script( 'wordcamp-pwa-page', WCPWAP_PLUGIN_URL . '/dist/pwa-page.js', [ 'lodash' ], filemtime( WCPWAP_PLUGIN_PATH . '/dist/pwa-page.js' ), true );
		wp_enqueue_style( 'wordcamp-pwa-page', WCPWAP_PLUGIN_URL . '/templates/assets/pwa-page.css', [], filemtime(  WCPWAP_PLUGIN_PATH . '/templates/assets/pwa-page.css' ) );
	}
}

/**
 * Helper function to determine whether the current page is using our template.
 */
function is_current_page_using_template( string $template_file ) {
	global $post;

	if ( ! isset( $post ) ) {
		return false;
	}

	return ( get_post_meta( $post->ID, '_wp_page_template', true ) === $template_file );
}
