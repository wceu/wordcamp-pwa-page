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

namespace WordCamp\PWAPage;

defined( 'ABSPATH' ) || wp_die();

define( 'WCPWAP_VERSION', '1.0.0' );

require_once( __DIR__ . '/includes/offline-storage.php' );
require_once( __DIR__ . '/includes/page-templates.php' );
