;(function($) {

	$('#tab-1').show();
	$('#tab-2-1').show();

	function tabsStart(mainPageTabs, tabsItem, tabLink){
		mainPageTabs.on('click', '.tab_link', function(e) {
			e.preventDefault();
			
			tabLink.removeClass('active');
			$(this).addClass('active');
			var tab = $(this).attr('href');
			tabsItem.hide();
			$(tab).show();
		});
	}

	tabsStart($('#main-page_tabs-1'), $('.tabs_item-1'), $('.tab_link-1'));
	tabsStart($('#main-page_tabs-2'), $('.tabs_item-2'), $('.tab_link-2'));

	if (window.screen.width <= '768') {	
		$('#main-slider').slick({
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<div class="slick-prev"></div>',
			nextArrow: '<div class="slick-next"></div>',
		});
	}
})(jQuery);