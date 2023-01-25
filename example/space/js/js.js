$(document).ready(function(){

    // 버튼을 클릭했을때 box가 45deg씩 돌아라.
    let i = 0
    $('.left').click(function(){
        i++;
        $('.box').css({'transform':'rotateY('+45*i+'deg)'})
    })

    $('.right').click(function(){
        i--;
        $('.box').css({'transform':'rotateY('+45*i+'deg)'})
    });


    function timer(){

        $('.right').trigger('click')

    }
    let slide = setInterval(timer,2000)

    // 마우스가 inner에 들어갔을때 interval이 지워져라.
    $('.inner').mouseenter(function(){
        clearInterval(slide)
    })

    // 마우스가 떠났을때 setInterval이 작동해라.
    $('.inner').mouseleave(function(){
        let slide = setInterval(timer,2000)
    })

})