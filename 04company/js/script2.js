$(document).ready(function(){
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
    }) // lang
})