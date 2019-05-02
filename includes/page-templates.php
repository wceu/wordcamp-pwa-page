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

	if ( ! isset( $post ) ) {
		return $template;
	}

	if ( 'template-pwa-home.php' !== get_post_meta( $post->ID, '_wp_page_template', true ) ) {
		return $template;
	}

	$file = plugin_dir_path( __DIR__ ) . 'templates/' . get_post_meta( $post->ID, '_wp_page_template', true );

	// Just to be safe, we check if the file exists first.
	if ( file_exists( $file ) ) {
		return $file;
	}

	return $template;
}
