<?php
/**
 * Provides a mobile friendly, app-style template with timely schedule information to use as a front page with PWA features during a WordCamp.
 *
 * @link              https://www.wordcamp.org
 * @since             1.0.0
 * @package           wordcamp-pwa-page
 *
 * @wordpress-plugin
 * Plugin Name:       WordCamp PWA Page
 * Plugin URI:        https://www.wordcamp.org/
 * Description:       Provides a mobile friendly, app-style template with timely schedule information to use as a front page with PWA features during a WordCamp.
 * Version:           1.0.0
 * Author:            WCEU 2019
 * Author URI:        https://2019.europe.wordcamp.org/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wcpwap
 * Domain Path:       /languages
 */

namespace WCEU\WCPWAP;

defined( 'ABSPATH' ) || wp_die();

define( 'WCPWA_VERSION', '1.0.0' );

/**
 * The core plugin classes.
 */
require 'vendor/autoload.php';

/**
 * Begins execution of the plugin.
 *
 * @since    1.0.0
 */
function run() {
	$template = new Includes\Templates();
	$template->init();

	$storage = new Includes\OfflineStorage();
	$storage->configure();
}
add_action( 'init', '\WCEU\WCPWAP\run' );
