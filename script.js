$(document).ready(function(){
	$('#burger').click(function(){
		$(this).toggleClass('open');
			$('#nav').toggleClass('open');
			$('header').toggleClass('open');
			$('aside').toggleClass('open');
	});
});