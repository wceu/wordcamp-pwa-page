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

add_filter( 'theme_page_templates', __NAMESPACE__ . '\add_new_template' );
add_filter( 'template_include',     __NAMESPACE__ . '\view_project_template' );
add_action( 'wp_enqueue_scripts',   __NAMESPACE__ . '\enqueue_assets' );

/**
 * Adds template to the attributes metabox.
 */
function add_new_template( $posts_templates ) {
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
function view_project_template( $template ) {

	global $post;

	if ( ! is_current_page_using_template( 'template-pwa-home.php' ) ) {
		return $template;
	}

	$file = plugin_dir_path( __DIR__ ) . 'templates/' . get_post_meta( $post->ID, '_wp_page_template', true );

	// Just to be safe, we check if the file exists first.
	if ( file_exists( $file ) ) {
		return $file;
	}

	return $template;
}

/**
 * Enqueues CSS and JS assets for our page template.
 */
function enqueue_assets() {
	if ( is_current_page_using_template( 'template-pwa-home.php' ) ) {
		wp_enqueue_script( 'wordcamp-pwa-page', plugins_url( '/dist/pwa-page.js', __DIR__ ), [], WCPWAP_VERSION, true );
		wp_enqueue_style( 'wordcamp-pwa-page', plugins_url( '/templates/assets/pwa-page.css', __DIR__ ), [], WCPWAP_VERSION );
	}
}

/**
 * Helper function to determine whether the current page is using our template.
 */
function is_current_page_using_template( $template_file ) {
	global $post;

	if ( ! isset( $post ) ) {
		return false;
	}

	return ( get_post_meta( $post->ID, '_wp_page_template', true ) === $template_file );
}
