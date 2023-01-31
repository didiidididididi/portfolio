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
    });

    // 동물소개 섹션에서 사진을 클릭 했을때 팝업으로 열려라.
    $('.animal li').click(function(){
        let ab = $(this).index();

        $('.popUp').fadeIn();
        $('.popUp>p').removeClass('on')
        $('.popUp>p').eq(ab).addClass('on')
        $('body').css({'overflow-y':'hidden'})

    });


    // 팝업에 스팬을 클릭했을때 팝업이 닫혀라.
    $('.popUp span').click(function(){
        

        $('.popUp').fadeOut();
        $('.popUp>p').removeClass('on');
        $('body').css({'overflow-y':'scroll'})
        
    });



    // 체험소개 섹션에서 li를 클릭했을때 팝업으로 열려라.

    $('.pro li').click(function(){
        let abc = $(this).index();

        $('.popUp2').fadeIn();
        $('.popUp2>p').removeClass('on')
        $('.popUp2>p').eq(abc).addClass('on')
        $('body').css({'overflow-y':'hidden'})
    });


    // 팝업2에 스팬을 클릭했을때 팝업이 닫혀라.
    $('.popUp2 span').click(function(){
        

        $('.popUp2').fadeOut();
        $('.popUp2>p').removeClass('on');
        $('body').css({'overflow-y':'scroll'})
        
    });

    // 동물소개,체험소개 팝업 스크롤 고정
    $('.popUp , .popUp2').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      
    });

    // 메뉴를 호버했을때 sub_menu가 보여라
    $('.gnb li').mouseenter(function(){
        let i = $(this).index();
        $('.sub_menu').stop().fadeIn()
    })

    $('header').mouseleave(function(){
        $('.sub_menu').stop().fadeOut()
    })


    

})