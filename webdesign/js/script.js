$(".menu>li").mouseover(function(){
    $(".submenu").stop().slideDown(300)
});
$(".menu>li").mouseout(function(){
    $(".submenu").stop().slideUp(300)
});

let num = 0;

function slideUp(){
    num++;
    if(num == 4){
        num=1;
        $(".slide").css("top",0)
    }
    console.log(num)
    $(".slide").animate({"top":-100*num+"%"},1000)
}

setInterval(slideUp,3000)


$(".gall").hide();
$(".tab>a").click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $(".tab>a").removeClass("active");
    $(this).addClass("active");

    $(".notice>ul").hide().eq(i).fadeIn()
})

$(".pop").hide();
$(".popup").click(function(e){
    e.preventDefault();
    $(".pop").fadeIn();
})
$(".close").click(function(e){
    e.preventDefault();
    $(".pop").hide();
})