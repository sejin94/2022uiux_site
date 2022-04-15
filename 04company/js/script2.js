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
                        <a href="sub01.html" class="d1">달콤</a>
                        <ul class="submenu">
                            <li><a href="sub01.html">브랜드 이야기</a></li>
                            <li><a href="#">App 소개</a></li>
                        </ul>
                    </li>
                   
                    <li class="menu">
                        <a href="#" class="d1">메뉴·매장</a>
                        <ul class="submenu">
                            <li><a href="#">메뉴</a></li>
                            <li><a href="#">매장찾기</a></li>
                            <li><a href="#">글로벌 달콤</a></li>
                        </ul>
                    </li>
                    <li class="menu">
                        <a href="#" class="d1">창업안내</a>
                        <ul class="submenu">
                            <li><a href="#">가맹점 개설 안내</a></li>
                            <li><a href="#">창업 상담 신청</a></li>
                        </ul>
                    </li>
                    <li class="menu">
                        <a href="#" class="d1">새로운 소식</a>
                        <ul class="submenu">
                            <li><a href="#">뉴스</a></li>
                            <li><a href="#">공지사항</a></li>
                            <li><a href="#">달콤 스토리</a></li>
                        </ul>
                    </li>
                    <li class="menu"><a href="#">가게</a></li>
                    <li class="menu"><a href="#">인재채용</a></li>
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