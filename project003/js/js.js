$(document).ready(function(){
    
    let ht = $(window).height();

    $('section').height(ht);

    $('nav li').click(function(e){
        e.preventDefault();
        let i = $(this).index();

    // 스타일시트 01번 적용스크립트 $('html,body').stop().animate({scrollTop:ht*i},800,'easeInBounce')
    
    $('section').removeClass('on')
    $('section').eq(i).addClass('on')

    })

    let wd = $(window).width();
    let hwd = $('header').width();

    $('#wrap').width(wd-hwd)

    $('#wrap').css({'left':hwd})

    $(window).resize(function(){

        let wd = $(window).width();
        let hwd = $('header').width();

    $('#wrap').width(wd-hwd)

    $('wrap').css({'left':hwd})
    $('section').height(ht);
    
    })

})