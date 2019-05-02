<?php
/**
 * The class responsible for registering and tracking custom page templates.
 *
 * @since 1.0.0
 *
 * @package    wordcamp-pwap
 * @subpackage wordcamp-pwap/includes
 */

namespace WordCamp\PWAPage;

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

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->templates = [
			'template-pwa-home.php' => 'PWA Style Homepage',
		];
	}

	/**
	 * Adds filters.
	 */
	public function init() {

		// Adds a filter to the attributes metabox to inject template.
		add_filter( 'theme_page_templates', [ $this, 'add_new_template' ] );

		// Adds a filter to the template include to determine if the page has our
		// template assigned and return it's path.
		add_filter( 'template_include', [ $this, 'view_project_template' ] );

	}

	/**
	 * Adds template to the attributes metabox.
	 */
	public function add_new_template( $posts_templates ) {
		$posts_templates = array_merge( $posts_templates, $this->templates );
		return $posts_templates;
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

		// Just to be safe, we check if the file exist first.
		if ( file_exists( $file ) ) {
			return $file;
		}

		return $template;
	}

}
