jQuery(document).ready(function() {
	console.log('rdy');

	// CAMBIO DE IDIOMA
	var update_texts = function() { 
		$('body').i18n(); 
	};

	$.i18n().load({
		'es': 'js/languages/es.json',
		'en': 'js/languages/en.json',
		'po': 'js/languages/po.json'
	}).done(function(){
		console.log('load:done');
		update_texts();
	});

	$("#languageSelector").change(function(){
		$.i18n().locale = $(this).val();
		update_texts();
	});

	// Setup isScrolling variable
	var isScrolling;
	// Listen for scroll events
	window.addEventListener('scroll', function ( event ) {
		// Clear our timeout throughout the scroll
		window.clearTimeout( isScrolling );
		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {
			// Run the callback
			console.log( 'Scrolling has stopped.' );
			$(".navbar-collapse").collapse('hide');
		}, 800);
	}, false);
});