$(document).ready(function(){

    $(".menuWrap>li").hover(function(){
        $(this).find(".submenu").stop().fadeIn(300);
    },function(){
        $(".submenu").stop().fadeOut(100)
    })
    // $(".menuWrap>li").mouseover(function(){
    //     $(this).children("a").css("color","#F43B00")
    //     $(this).find(".submenu").stop().fadeIn(300);
    // });
    
    // $(".menuWrap>li").mouseout(function(){
    //     $(this).children("a").css("color","black")
    //     $(".submenu").stop().fadeOut(100)
    // })

    $(".slider").bxSlider({auto:true});
    var myslider = $(".nSlider").bxSlider({
        controls:false,
        auto:true
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
    $(".modal").colorbox({
        iframe:true,
        innerWidth:1000,
        innerHeight:562.5
    });

    $(".navbar > ul").hover(function(){
        $(this).parent().addClass("view");
    },function(){
        $("navbar").removeClass("view")
    });

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
            $(".navbar .menuWrap").html(`
                 <li class="menu">
                        <a href="sub01.html" class="d1">Dal.Komm</a>
                        <ul class="submenu">
                            <li><a href="sub01.html">brand story</a></li>
                            <li><a href="#">App</a></li>
                        </ul>
                    </li>
                   
                    <li class="menu">
                        <a href="#" class="d1">store</a>
                        <ul class="submenu">
                            <li><a href="#">menu</a></li>
                            <li><a href="#">storeserch</a></li>
                            <li><a href="#">global dalkomm</a></li>
                        </ul>   
                    </li>
                    <li class="menu">
                        <a href="#" class="d1">business</a>
                        <ul class="submenu">
                            <li><a href="#">business</a></li>
                            <li><a href="#">business</a></li>
                        </ul>
                    </li>
                    <li class="menu">
                        <a href="#" class="d1">news</a>
                        <ul class="submenu">
                            <li><a href="#">news</a></li>
                            <li><a href="#">notice</a></li>
                            <li><a href="#">dalkomm story</a></li>
                        </ul>
                    </li>
                    <li class="menu"><a href="#">store</a></li>
                    <li class="menu"><a href="#">job</a></li>
            `)
            $(".menuWrap>li").hover(function(){
                $(this).find(".submenu").stop().fadeIn(300);
            },function(){
                $(".submenu").stop().fadeOut(100)
            })
            
        } else{
            $(".navbar .menuWrap").html(`
                 <li class="menu">
                        <a href="sub01.html" class="d1">??????</a>
                        <ul class="submenu">
                            <li><a href="sub01.html">????????? ?????????</a></li>
                            <li><a href="#">App ??????</a></li>
                        </ul>
                    </li>
                   
                    <li class="menu">
                        <a href="#" class="d1">??????????????</a>
                        <ul class="submenu">
                            <li><a href="#">??????</a></li>
                            <li><a href="#">????????????</a></li>
                            <li><a href="#">????????? ??????</a></li>
                        </ul>
                    </li>
                    <li class="menu">
                        <a href="#" class="d1">????????????</a>
                        <ul class="submenu">
                            <li><a href="#">????????? ?????? ??????</a></li>
                            <li><a href="#">?????? ?????? ??????</a></li>
                        </ul>
                    </li>
                    <li class="menu">
                        <a href="#" class="d1">????????? ??????</a>
                        <ul class="submenu">
                            <li><a href="#">??????</a></li>
                            <li><a href="#">????????????</a></li>
                            <li><a href="#">?????? ?????????</a></li>
                        </ul>
                    </li>
                    <li class="menu"><a href="#">??????</a></li>
                    <li class="menu"><a href="#">????????????</a></li>
            `)
            $(".menuWrap>li").hover(function(){
                $(this).find(".submenu").stop().fadeIn(300);
            },function(){
                $(".submenu").stop().fadeOut(100)
            })
            
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