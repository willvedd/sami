$('.expander').click(function(){
	$(".form").fadeIn(300, function(){		
		$(".form").toggleClass("hide");
	});
});