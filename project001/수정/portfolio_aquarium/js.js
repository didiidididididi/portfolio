$(document).ready(function(){

    // 높이값 찾기
    let ht = $(window).height();
    console.log(ht)

    $('section').height(ht);

    // 동영상 자동재생
    document.getElementById('vid').play();

    // fixed 보이기, 숨기기
    $('span').click(function(){
        $(this).parent().stop().animate({'right':0},500)
    });

    $('.sideMenu').mouseleave(function(){
        $('.sideMenu').stop().animate({'right':'-100px'},500)
    });


    // 마우스 휠
    $('section').mousewheel(function(event,delta){
        event.preventDefault()

        if (delta>0){
            let prev = $(this).prev().offset().top
            $('html,body').stop().animate({'scrollTop':prev},1400,'swing')
        } else if (delta<0){
            let next = $(this).next().offset().top
            $('html,body').stop().animate({'scrollTop':next},1400,'swing')
        }
    
    });

    // TOP버튼 누르면 최상단으로 이동
    $('.top').click(function(){
        $('html, body').stop().animate({'scrollTop':0},2000)
        return false;
    })


    $('#animal li').click(function(){
        let ab = $(this).index()

        $('.popUp').fadeIn();
        $('.popUp>p').removeClass('on')
        $('.popUp>p').eq(ab-1).addClass('on')
        $('body').css({'overflow-y':'hidden'})

    })

    $('.popUp span').click(function(){

        $('.popUp').fadeOut();
        $('.popUp>p').removeClass('on');
        $('body').css({'overflow-y':'scroll'})
    })


    

})