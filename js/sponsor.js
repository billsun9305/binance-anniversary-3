// 初始化 sponsor 的 script
// 用之前，先將所有Daimond sponsor logo 照順序以 D0.png, D1.png ... 存放在img/sponsors/ 資料夾中。
// Gold, Sliver, Media 以此類推 G0.png, S1.png, M0.png 等
// 須確保所有 logo 都是png檔，且必須從0開始，不能斷號
// 完成後將底下 num_of_sponsor 的值改成sponsors的總數（對應每個）
// 完成！！！
// PS. 原本 img/sponsors/ 內應該就有很多張，請先刪掉，那是我測試用的

var num_of_sponsor=[3,1,1,1]; // 改這裡
var code_of_sponsor=['D','G','S','M'];

// 
// var all_contactor_info={
// 	'D0':['Alice','Product Manager','alice@gmail.com'],
// 	'D1':['Bob','CEO','bob@gmail.com'],
// 	'D2':['Ken','Product Manager','ken@gmail.com'],
// 	'G0':['George','Backend Engineer','geo@gmail.com'],
// 	'S0':['Selina','Front Engineer','sel@gmail.com'],
// 	'M0':['Mark','Full-Stack Engineer','mark@gmail.com'],
// };



for (var i = 0; i < 4; i++) {
	for (var j = 0; j < num_of_sponsor[i]; j++) {
	    var img = $('<img>');
		img.attr('src', "img/sponsors/"+code_of_sponsor[i]+String(j)+".png");
		img.attr('id',code_of_sponsor[i]+String(j));
		img.appendTo('#sponsor_list_'+code_of_sponsor[i]);

	}
}

// $( ".sponsors_list img" ).click(function() {
// 	$('#contact-modal-btn').click();
// 	var info = all_contactor_info[$(this).attr('id')];
// 	console.log(info);
// 	$('#contact-name').html(info[0]);
// 	$('#contact-title').html(info[1]);
// 	$('#contact-email').html(info[2]);
// });