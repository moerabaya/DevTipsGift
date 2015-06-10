function animate(){

	$('.swirls-i').each(function() {
		$(this).css('margin-left', Math.random() * 100 + "%");
	});
	$('.swirls-ii').each(function() {
		$(this).css('margin-left', Math.random() * 100 + "%");
	});
};

$(function(){
	animate();
});