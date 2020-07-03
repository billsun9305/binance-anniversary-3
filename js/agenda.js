var original_height=$("#agenda_collapse_original").height();
$("#view_agenda_btn").click(function(){
	$("#view_agenda_btn").css('visibility', 'hidden');
	$("#agenda_collapse").animate({
		marginTop: -Math.floor(original_height*(1/3)),
		opacity: 1
	}, 500, 'easeInOutCubic' );
	

});
$("#view_agenda_btn_less").click(function(){
	$("#to_agenda").trigger( "click" );
	$("#view_agenda_btn").css('visibility', 'visible');
	$("#agenda_collapse").animate({
		marginTop: 0,
		opacity: 0
	}, 500, 'easeInOutCubic' );
});

var original_height=$("#awards_collapse_original").height();
$("#view_awards_btn").click(function(){
	$("#view_awards_btn").css('visibility', 'hidden');
	$("#awards_collapse").animate({
		marginTop: -Math.floor(original_height*(1/3)),
		opacity: 1
	}, 500, 'easeInOutCubic' );
	

});
$("#view_awards_btn_less").click(function(){
	$("#to_awards").trigger( "click" );
	$("#view_awards_btn").css('visibility', 'visible');
	$("#awards_collapse").animate({
		marginTop: 0,
		opacity: 0
	}, 500, 'easeInOutCubic' );
});