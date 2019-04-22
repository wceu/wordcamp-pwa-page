<?php
/**
 * The class responsible for registering and tracking custom page templates.
 *
 * @since	  1.0.0
 *
 * @package	wordcamp-pwap
 * @subpackage wordcamp-pwap/includes
 */

namespace WCEU\WCPWAP\Includes;

/**
 * The class responsible for registering and tracking custom page templates.
 */
class Templates {

	/**
	 * The array of templates that this plugin tracks.
	 *
	 * @var      array
	 */
	protected $templates;

	public function __construct() {
		$this->templates = [
			'template-pwa-home.php' => 'PWA Style Homepage',
		];
	}

	/**
	 * Adds template to the attributes metabox.
	 */
	public function add_new_template( $posts_templates ) {
		$posts_templates = array_merge( $posts_templates, $this->templates );
		return $posts_templates;
	}

	/**
	 * To inject our template into the page cache during save post.
	 */
	public function register_project_templates( $atts ) {

		// Create the key used for the themes cache
		$cache_key = 'page_templates-' . md5( get_theme_root() . '/' . get_stylesheet() );

		// Retrieve the cache list. If it doesn't exist, or it's empty prepare an array
		$templates = wp_cache_get( $cache_key, 'themes' );
		if ( empty( $templates ) ) {
			$templates = array();
		}

		// Since we've updated the cache, we need to delete the old cache
		wp_cache_delete( $cache_key , 'themes');

		// Now add our template to the list of templates by merging our templates
		// with the existing templates array from the cache.
		$templates = array_merge( $templates, $this->templates );

		// Add the modified cache to allow WordPress to pick it up for listing
		// available templates
		wp_cache_add( $cache_key, $templates, 'themes', 1800 );

		return $atts;
	}

	/**
	 * Determines if the page has our template assigned and return it's path.
	 */
	public function view_project_template( $template ) {

		global $post;

		if ( ! isset( $post ) ) {
			return $template;
		}

		if ( ! isset( $this->templates[ get_post_meta( $post->ID, '_wp_page_template', true ) ] ) ) {
			return $template;
		}

		$file = plugin_dir_path( __DIR__ ) . 'templates/' . get_post_meta( $post->ID, '_wp_page_template', true );

		// Just to be safe, we check if the file exist first
		if( file_exists( $file ) ) {
			return $file;
		}

		return $template;
	}

}
