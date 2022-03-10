
//let layer = document.querySelector(".layer"); 전체중에 첫번째
let layer = document.querySelectorAll(".layer");

window.addEventListener("scroll",function(){
    console.log(window.pageYOffset)
    // 주어.style.transform = translateY()
    let scrollTop = window.pageYOffset;

    layer.forEach(function(item,index){
        console.log(item.dataset.speed)
        let speed = item.dataset.speed;
        // item.style.transform = "translateY("+ scrollTop +"px)"
        // item.style.transform = `translateY(${scrollTop/speed*4}px)`;
        item.style.transform = `translate3d(${scrollTop/speed}px,${scrollTop/speed*4}px,0)`;
    });
    


});