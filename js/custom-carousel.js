for (var i = 0; i < 2; i++) {
    var newDiv = $("#example_carousel_item").clone();
    newDiv.attr("src","video/carousel_video/$video_ID.mp4".replace("$video_ID",String(i)));
    newDiv.addClass("item-"+String(i));
    newDiv.show();
    newDiv.appendTo("#carousel_img_list");
}//init carousel img


var carousel = $(".custom-carousel")[0]; // by classname
var carousel_item_list=carousel.getElementsByClassName("custom-carousel-item");
// 把第一個example的給丟掉
carousel_item_list[0].remove();


var carousel_index=0;
var carousel_btn = [carousel.getElementsByClassName('left-btn')[0],carousel.getElementsByClassName('right-btn')[0]];
carousel_btn[0].onclick = function(){
    console.log(carousel_index);
 	carousel_index = carousel_index>0?carousel_index-1:carousel_item_list.length-1;
 	console.log(carousel_index);
 	carousel_shift(carousel_item_list,carousel_index);
};
carousel_btn[1].onclick = function(){
    console.log(carousel_index);
 	carousel_index = carousel_index<carousel_item_list.length-1?carousel_index+1:0;
 	console.log(carousel_index);
 	carousel_shift(carousel_item_list,carousel_index);
};

function carousel_shift(carousel_item_list,carousel_index){
	shift=carousel_index*-110;
    for (var i = 0; i < carousel_item_list.length; i++) {
        if (carousel_index==0 || carousel_index == carousel_item_list.length-1|| (i>=carousel_index-1 && i <=carousel_index+2))
            carousel_item_list[i].style["transform"]="translateX("+String(shift).concat("%)");
        else{
            // 對不會在這次需要呈現的物件關閉動畫，增加整體效能
            carousel_item_list[i].classList.add("notransition");
            carousel_item_list[i].style["transform"]="translateX("+String(shift).concat("%)");
        }
    }
    setTimeout(function(){
        for (var i = 0; i < carousel_item_list.length; i++) {
            carousel_item_list[i].classList.remove("notransition");    
        }    
    },800);
    
    
	
}


// swiper

var container = document.querySelector(".swiper-container");

container.addEventListener("touchstart", startTouch, false);
container.addEventListener("touchmove", moveTouch, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
initialX = e.touches[0].clientX;
initialY = e.touches[0].clientY;
};

function moveTouch(e) {
if (initialX === null) {
    return;
}

if (initialY === null) {
    return;
}

var currentX = e.touches[0].clientX;
var currentY = e.touches[0].clientY;

var diffX = initialX - currentX;
var diffY = initialY - currentY;

if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
        // swiped left
        carousel_index = carousel_index<carousel_item_list.length-1?carousel_index+1:0;
        carousel_shift(carousel_item_list,carousel_index);
        
        
    } else {
        // swiped right
        carousel_index = carousel_index>0?carousel_index-1:carousel_item_list.length-1;
        carousel_shift(carousel_item_list,carousel_index);
    }     
} else {
    // sliding vertically
    if (diffY > 0) {
        // swiped up
        console.log("swiped up");
    } else {
        // swiped down
        console.log("swiped down");
    }     
}

initialX = null;
initialY = null;

e.preventDefault();
};
