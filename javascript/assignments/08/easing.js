$(document).ready(function(){

	$('ol li').each(function(i) {
		var preview = $('#preview');
		var final_x = i * -400;
		$(this).mouseover(function() {
			preview.animate({
				"left": final_x
				},{
					queue: false,
					duration: 500,
					easing: "easeOutBounce"
				});
		});
   });

});