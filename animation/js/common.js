$(document).ready(function() {
	$('.movie__pic').each(function () {
		$(this).click(function (e) {
			$('.flipped').removeClass('flipped');
			$(this).toggleClass('flipped');
			return fault;
		});
	});
	$('#popup').click(function(){
		$('.overlay,.popup').toggleClass('is-shown');
	});


	$('#te').click(function () {
	    $('#te .block').addClass('is-wide').afterTransition(function () {
	        alert('do whatever u want, animation is finished');
	    });
	});
});
