<?php
/**
 * Mobile friendly, app-style template with timely schedule information to use as a front page with PWA features during a WordCamp.
 *
 * @package	wordcamp-pwap
 * @subpackage wordcamp-pwap/templates
 */

namespace WCEU\WCPWAP\Templates;

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	[[PWA Style Homepage content goes here.]]

	<?php wp_footer(); ?>
</body>
</html>
