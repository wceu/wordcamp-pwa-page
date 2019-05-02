<?php
/**
 * The core plugin class.
 *
 * @since 1.0.0
 *
 * @package    wordcamp-pwap
 * @subpackage wordcamp-pwap/includes
 */

namespace WCEU\WCPWAP\Includes;

/**
 * The core plugin class.
 */
class Wcpwap {

	/**
	 * Begins execution of the plugin.
	 */
	public function init() {

		$template = new Templates();

		// Adds a filter to the attributes metabox to inject template.
		add_filter( 'theme_page_templates', [ $template, 'add_new_template' ] );

		// Adds a filter to the template include to determine if the page has our
		// template assigned and return it's path.
		add_filter( 'template_include', [ $template, 'view_project_template' ] );

		$storage = new OfflineStorage();
		$storage->configure();

	}

}
