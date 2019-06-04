<?php
/**
 * Mobile friendly, app-style template with timely schedule information to use as a front page with PWA features during a WordCamp.
 *
 * @package wordcamp-pwap
 * @subpackage wordcamp-pwap/templates
 */

namespace WordCamp\PWAPage\Templates;

$description = get_bloginfo( 'description', 'display' );

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<link rel="profile" href="http://gmpg.org/xfn/11"/>
	<?php wp_head(); ?>

	<style type="text/css">

	</style>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<header id="pwa-header" class="pwa-header-area">
	<div class="pwa-header-wrapper">
		<p class="site-title">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
				<?php bloginfo( 'name' ); ?>
			</a>
		</p>
		<?php if ( $description || is_customize_preview() ) : ?>
			<p class="site-description">
				<?php echo esc_html( $description ); ?>
			</p>
		<?php endif; ?>
	</div>
</header>
<div id="pwa-primary" class="pwa-content-area">
	<main id="pwa-main" class="pwa-site-main" role="pwa-main">
		<h1><?php echo esc_html_x( 'Live Schedule', 'title', 'wordcamp-pwa-page' ); ?></h1>

		<div id="on-now" class="pwa-page-content"></div>
		<div id="up-next" class="pwa-page-content"></div>

		<a href="<?php echo esc_url( site_url( __( 'schedule', 'wordcamp-pwa-page' ) ) ); ?>" class="full-schedule">
			<?php echo esc_html_x( 'View Full Schedule', 'text', 'wordcamp-pwa-page' ); ?>
		</a>

		<h2><?php echo esc_html_x( 'Latest Posts', 'title', 'wordcamp-pwa-page' ); ?></h2>
		<div id="latest-posts" class="pwa-page-content"></div>
		<a href="<?php echo esc_url( get_post_type_archive_link( 'post' ) ); ?>" class="all-posts">
			<?php echo esc_html_x( 'View All Posts', 'text', 'wordcamp-pwa-page' ); ?>
		</a>
	</main>
</div>
<footer class="pwa-footer-area">
	<div class="pwa-footer-wrapper">
		<?php if ( is_active_sidebar( 'pwa-footer' ) ) : ?>
			<div id="pwa-footer-widget-area" class="chw-widget-area widget-area" role="complementary">
				<?php dynamic_sidebar( 'pwa-footer' ); ?>
			</div>
		<?php endif; ?>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
