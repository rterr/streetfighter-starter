$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	$('.ryu').mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	$('.ryu').mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left','520px');
			});
	})
		$('.ryu').mouseup(function(){
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	})

	$(document).keydown(function(event) {
		if (event.which == 88) {
			playGroove();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();

		};
	}).keyup(function(event) {
	 	if(event.which == 88) {
	 		$('#groove-sound')[0].pause();
	 		$('#groove-sound')[0].load();
	 		$('.ryu-still').show();
			$('.ryu-cool').hide();

	 	};

	 });


});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
<<<<<<< HEAD
} 
=======
}

function playGroove () {
	$('#groove-sound')[0].volume = 0.5;
	$('#groove-sound')[0].play();
}

// combine ryu action images in one div class=ryu-action
>>>>>>> origin/master
