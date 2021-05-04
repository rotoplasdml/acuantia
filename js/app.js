jQuery(document).ready(function() {
	console.log('rdy');

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
});