$(document).ready(function(){

    $(".slider").bxSlider();
    var myslider = $(".nSlider").bxSlider({
        controls:false
    });
    $(".right").click(function(){
        myslider.goToNextSlide();
    });
    $(".left").click(function(){
        myslider.goToPrevSlide();
    });
    // $(".nSlider").bxSlider({
    //     controls:false,
    //     pagerCustom:".btnWrap"

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        loop: true,
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
        },
        navigation: {   
            nextEl: ".sright",
            prevEl: ".sleft",
        },
      });
      


    $(".lang div").click(function(){
        let i = $(this).index();
        $(".lang div").removeClass("active");
        $(this).addClass("active");

        if (i == 1){
            $(".navbar ul").html(`
                <li><a href="#">Dal.Komm</a></li>
                <li><a href="#">Menu·Store</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Recruit</a></li>
            `)
        } else{
            $(".navbar ul").html(`
                <li><a href="#">달콤</a></li>
                <li><a href="#">메뉴·매장</a></li>
                <li><a href="#">창업안내</a></li>
                <li><a href="#">새로운 소식</a></li>
                <li><a href="#">가게</a></li>
                <li><a href="#">인재채용</a></li>
            `)
        }
    }); // lang

    $(window).scroll(function(){
        let scrollY = window.pageYOffset;
        console.log(scrollY)

        if (scrollY > 200){
            $("#header").addClass("fixed");
        }else{
            $("#header").removeClass("fixed")
        }

    });

    const $toElem = $(".toggle");
    let chk = true;

    $toElem.click(function(){
        console.log("click")

        if (chk == true) {
            $(this).addClass("active");
            $(".navbar").css({left: 0})
            $(".lang").css("display","flex");
            chk = false;   

        }else{
            $(this).removeClass("active");
            $(".navbar").css({left: "-100%"})
            $(".lang").hide();
            chk = true;   
        }
    })
    $(window).resize(function () {
        $(".toggle").removeClass("active");
        $(".navbar").removeAttr("style");
        $(".lang").removeAttr("style");
        
    })


})