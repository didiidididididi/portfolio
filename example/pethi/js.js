$(document).ready(function(){


    let ht = $(window).height()
    let hdHt = $('header').height()

    $('section').eq(0).height(ht-hdHt)
    $('section').eq(3).height(ht)
    $('section').eq(4).height(ht)


    $(window).resize(function(){

        let ht = $(window).height()
        let hdHt = $('header').height()
    
        $('section').eq(0).height(ht-hdHt)
        $('section').eq(3).height(ht)
        $('section').eq(4).height(ht)
    })

 let ii=0
    $('.pro').click(function(){
ii++

        $('.shop span').text(ii)
    })


let hot = $('header').offset().Top;
    $(window).scroll(function(){
        let hot = $('header').offset().top;
        let sc = $(this).scrollTop();

        if(sc>=hot){
            $('header').addClass('on')
        }else if(sc<hot){
            $('header').removeClass('on')
        }

    

    })

    // sub page 스크립트 설정

    // 첫번째 btn span을 클릭했을때 .box02 , 나의 부모인 btn에 on값을 붙인다.
    $('.btn span').eq(0).click(function(){
        $('.sub .box02').addClass('on');
        $(this).parents().addClass('on');
        $(this).removeClass('on')
        $('.btn span').eq(1).addClass('on')
    })

    $('.btn span').eq(1).click(function(){
        $('.sub .box02').removeClass('on');
        $(this).parents().removeClass('on');
        $(this).removeClass('on')
        $('.btn span').eq(0).addClass('on')
    })

    $('.button').click(function(){
        ii++
        
        $('.shop span').text(ii)
    
    })

    $('.button02').click(function(){
        alert('로그인 후 사용하세요.')
    })


    $('.util li').eq(0).click(function(e){
        e.preventDefault();
        $('.notice').fadeIn()
        $('body').css({'overflow':'hidden'})
        $('.sub .box02').removeClass('on');
        $('.btn').removeClass('on');
        $('btn span').eq(1).removeClass('on')
        $('.btn span').eq(0).addClass('on')
        
    })

    $('.close').eq(0).click(function(e){

        $('.notice').fadeOut()
        $('body').css({'overflow-y':'scroll'})
        
    })




})