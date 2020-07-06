// 計算在當前網頁中每行最多可以塞幾個speaker, for RWD，創造假的div來塞空間
var speaker_list_width = $("#speaker_list").width();//after padding
var speaker_item_width = $("#speaker_example").outerWidth();
var speaker_each_row = Math.floor(speaker_list_width/speaker_item_width);
var speaker_num = speaker_list.length;
var virtual_div_num = speaker_each_row-(speaker_num%speaker_each_row);
virtual_div_num = virtual_div_num==speaker_each_row?0:virtual_div_num;

// speaker_list 定義在 js/content.js 中
// speaker_show_num 定義在 js/content.js 中，但會被調整成speaker_each_row倍數
// 先記住最一開始的show 的排數
var init_show_row=Math.floor(speaker_show_num / speaker_each_row);
speaker_show_num = speaker_show_num<speaker_each_row?speaker_show_num:init_show_row*speaker_each_row;

// speaker_list[0] --> name, speaker_list[1] --> field, speaker_list[2] --> title

var speaker_div_list = new Array();
var virtual_div_list = new Array();
function init_show(speaker_show_num){
	var count=0;
	speaker_list.some(function(speaker_info) {
		// 讓speaker一開始顯示不超過15個
	    var newDiv = $("#speaker_example").clone();
	    newDiv.appendTo("#speaker_list");
	    newDiv.find('.text-content.name').html(speaker_info[0]);
	    newDiv.find('.text-content.company').html(speaker_info[1]);
	    newDiv.find('.speaker_bg').css("background-image", "url(https://public.bnbstatic.com/static/binance-third-anniversary/img/speakers/$SPEAKER_NAME.png)".replace("$SPEAKER_NAME",speaker_info[0].replace(/ /g, '%20'))); 
	    
	    // newDiv.find('.text-content').html(speaker_info[1]+"<br>"+speaker_info[2]);
	    // 若超過預設顯示的量，先不顯示
	    if (count<speaker_show_num){
	    	newDiv.show();
	    	newDiv.css('opacity', '1');
	    }
	    speaker_div_list.push(newDiv);
	    count++;
	});
	// 塞空格的div
	// for (var i = 0; i < virtual_div_num; i++) {
	// 	var newDiv = $("#speaker_example").clone();
	// 	newDiv.appendTo("#speaker_list");
	// 	virtual_div_list.push(newDiv);
	// }
}

function reset_all(){
	speaker_div_list.some(function(speaker_div) {
		speaker_div.remove();
	});    
	virtual_div_list.some(function(virtual_div) {
		virtual_div.remove();
	});    
	speaker_div_list = new Array();
	virtual_div_list = new Array();
}

init_show(speaker_show_num);

if (speaker_div_list.length>=speaker_show_num){
	// 超過15個的話，顯示view more btn
	$("#view_more_speaker_btn").show();
}

// 一些特殊設定，為了讓 height: auto的物件高度調整能有動畫（smoothly）
//具體做法是把list的高度從auto調整成固定，然後expand的時候一瞬間調整成auto抓height，在馬上調回來，用height來跑動畫
var speaker_list_start_height = $("#speaker_list").get(0).scrollHeight;
$("#speaker_list").height(speaker_list_start_height);


$(window).resize(function() {//每當window 被 resize
	// 重算virtual div量和speaker_show_num	
	speaker_list_width = $("#speaker_list").width();//after padding
	var new_speaker_each_row = Math.floor(speaker_list_width/speaker_item_width);
	if (speaker_each_row!=new_speaker_each_row) {//如果需要改變顯示
		speaker_each_row = new_speaker_each_row;
		virtual_div_num = speaker_each_row-(speaker_num%speaker_each_row);
		virtual_div_num = virtual_div_num==speaker_each_row?0:virtual_div_num;
		console.log(virtual_div_num);
		speaker_show_num = speaker_show_num<speaker_each_row?speaker_show_num:init_show_row*speaker_each_row;
		reset_all();
		init_show(speaker_show_num);
		$("#view_more_speaker_btn").removeClass("show_less");
		$("#view_more_speaker_btn").text("View more");
		// 重算height
		$("#speaker_list").height("auto");
	 	speaker_list_start_height = $("#speaker_list").get(0).scrollHeight;
		$("#speaker_list").height(speaker_list_start_height);
	}
	

	

});





// trigger 事件
$("#view_more_speaker_btn").click(function(){
	if ($("#view_more_speaker_btn").hasClass("show_less")) {//show less
		speaker_div_list.slice(speaker_show_num).reverse().some(function(speaker_div,index) {
			setTimeout(function(){
				speaker_div.animate({
					opacity: "0"
				}, 150);
			},20*index);
		}); 
		$("#to_speaker").trigger( "click" );
		$("#speaker_list").animate({
			height: speaker_list_start_height
		}, 20*(speaker_div_list.length - speaker_show_num), 'easeInOutCubic' );

        // hide all virtual div
        setTimeout(function(){
	        virtual_div_list.some(function(virtual_div,index) {
				virtual_div.hide();
			});    
		},20*(speaker_div_list.length - speaker_show_num));
		
		setTimeout(function(){
	        speaker_div_list.slice(speaker_show_num).some(function(speaker_div,index) {
			speaker_div.hide();
		});    
		},20*(speaker_div_list.length - speaker_show_num + virtual_div_num));
		
		$("#view_more_speaker_btn").removeClass("show_less");
		$("#view_more_speaker_btn").text("View more");
	}
	else{
		// display all virtual div
		virtual_div_list.some(function(virtual_div,index) {
			virtual_div.show();
		});    
	 	speaker_div_list.slice(speaker_show_num).some(function(speaker_div,index) {

	 		speaker_div.show();
	 		setTimeout(function(){
				speaker_div.animate({
					opacity: "1"
				}, 150);
			},20*index);
		});
		$("#speaker_list").animate({
			height: $("#speaker_list").get(0).scrollHeight
		}, 20*(speaker_div_list.length - speaker_show_num), 'easeInOutCubic' );
		$("#view_more_speaker_btn").addClass("show_less");
		$("#view_more_speaker_btn").text("View less");
	}
});




