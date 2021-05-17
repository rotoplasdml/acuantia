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
	
	// SCROLL CON EL MENU
	$(".scroll-btn a, .scroll-btn").on('click', function(event) {
		if (this.hash !== "") { // Make sure this.hash has a value before overriding default behavior
			event.preventDefault(); // Prevent default anchor click behavior
			var hash = this.hash; // Store hash
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash; // Add hash (#) to URL when done scrolling (default click behavior)
			});
		} // End if
	});
});