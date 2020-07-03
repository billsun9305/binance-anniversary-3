var now_video=0;
$('.change-video-btn').click(function() {
	console.log("wow");
	if (now_video==0) {//go to vice
		$(".vice-video").addClass('vice-left');
		$(".main-video").addClass('main-left');
		now_video=1;
	}
	else{// go to main
		$(".vice-video").removeClass('vice-left');
		$(".main-video").removeClass('main-left');
		now_video=0;
	}
});