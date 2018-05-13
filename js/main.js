$(document).ready(function(){
	$('#home-tab').click(function(){
		$('html, body').animate({scrollTop: $('#home-container').offset().top}, 500)
	});

	$('#sean-tab').click(function(){
		$('html, body').animate({scrollTop: $('#sean-container').offset().top}, 500)
	});

	$('#sarah-tab').click(function(){
		$('html, body').animate({scrollTop: $('#sarah-container').offset().top}, 500)
	});

	$('#photos-tab').click(function(){
		$('html, body').animate({scrollTop: $('#photo-container').offset().top}, 500)
	});
});