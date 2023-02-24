$(document).ready(function(){
    
    // 브라우저의 높이값 찾기
    let ht = $(window).height();
    // gnb의 높이를 찾아라
    let gnbht = $('.menu').height();
    console.log(gnbht)
    // gnb의 가로값을 찾아라
    let gnbwd = $('.menu').width();
    console.log(gnbwd)

    $('section').height(ht);

    // $('.menu li').click(function(){
    //     // e.preventDefault();
    //     let i = $(this).index();

    // // 스타일시트 01번 적용스크립트 $('html,body').stop().animate({scrollTop:ht*i},800,'easeInBounce')
    
    // $('section').removeClass('on')
    // $('section').eq(i).addClass('on')

    // })
    $(window).resize(function(){
        let ht = $(window).height();
        let wd = $(window).width();
        let hwd = $('header').width();

    $('#wrap').width(wd-hwd)

    $('wrap').css({'left':hwd})
    $('section').width(wd);
    $('section').height(ht);
    
    })

    $('.menu li').click(function(e){
        e.preventDefault()
        let i = $(this).index();
        let ht = $(window).height()

        // 클릭했을때 나에게 클래스 on값을 붙여라.
        $('.menu li').removeClass('on')
        $(this).addClass('on')
        $('section').removeClass('on')
        $('section').eq(i).addClass('on')
        $('html,body').stop().animate({'scrollTop':ht*i},1400,'swing')
    })

    // 스크롤바의 위치값 찾아내기
    $(window).scroll(function(){

        let sc = $(this).scrollTop();
        let ht = $(window).height();

    //  if(sc>= ht*2){
    //     $('.menu li').eq(2).addClass('on')
    //  }

    for(var ab=0; ab<4; ab++){

        let sc = $(window).scrollTop();
        let ht = $(window).height();
        
        if(sc>(ht-200)*ab && sc<=(ht-200)*(ab+1)){
            $('.menu li').removeClass('on')
            $('.menu li').eq(ab).addClass('on')

        }

    }

    let i = 0
    $('.next').click(function(){
      if(i<=13) i++;
      if(i==12) i=0;
      console.log(i)
        $('.album_img li').removeClass('on')
        $('.album_title li').removeClass('on')
        $('.album_chart li').removeClass('on')
        $('.play').addClass('on')

        $('.album_img li').eq(i).addClass('on')
        $('.album_title li').eq(i).addClass('on')
        $('.album_chart li').eq(i).addClass('on')
        $('.pause').removeClass('on')
    })
    
    $('.prev').click(function(){
        
      if(i==0) i=12;
      if(i>0) i--;
        
        console.log(i)
        
          $('.album_img li').removeClass('on')
          $('.album_title li').removeClass('on')
          $('.album_chart li').removeClass('on')
          $('.pause').removeClass('on')

          $('.album_img li').eq(i).addClass('on')
          $('.album_title li').eq(i).addClass('on')
          $('.album_chart li').eq(i).addClass('on')
          $('.play').addClass('on')
      })
        
    })

    $('.play').click(function(){
        $('.pause').addClass('on')
        $('.play').removeClass('on')
    })

    $('.pause').click(function(){
        $('.play').addClass('on')
        $('.pause').removeClass('on')
    })

    // 앨범차트목록에 li를 클릭했을때 on값이 붙고 앨범이미지와 노래제목 바뀌어라.
    $('.album_chart li').click(function(){
        
        $('.album_chart li').removeClass('on')
        $(this).addClass('on')
        
        let ii = $(this).index();
        $('.album_img li').removeClass('on')
        $('.album_title li').removeClass('on')
        
        $('.album_img li').eq(ii).addClass('on')
        $('.album_title li').eq(ii).addClass('on')
        
        // 재생버튼이 pause일때 play로 바뀌어서 나타나라.
        $('.pause').removeClass('on')
        $('.play').addClass('on')

    })

    // 갤러리 섹션에서 li를 클릭했을때 해당 팝업으로 열려라
    $('.gal_img li').click(function(){
        let abc = $(this).index();
        console.log(abc)
        
        $('.gal_popUp').fadeIn();
        $('.gal_popUpBox ul').eq(abc).addClass('on')
        $('body').css({'overflow-y':'hidden'})

    })


    // 왼쪽방향을 클릭했을때 이전 사진이 나타나라
    let ccc= 0
    $('.arrow_left').click(function(){
    if(ccc==0)ccc=4
    if(ccc>0)ccc--;
    

    console.log(ccc);
    $('.gal_popUpBox ul.on li').removeClass('on')
    $('.gal_popUpBox ul.on li').eq(ccc).addClass('on')


    })

    // 오른쪽방향을 클릭했을때 다음사진이 나타나라
    $('.arrow_right').click(function(){
    
        if(ccc<=4)ccc++;
        if(ccc==4)ccc=0
    
        console.log(ccc);
        $('.gal_popUpBox ul.on li').removeClass('on')
        $('.gal_popUpBox ul.on li').eq(ccc).addClass('on')
    
    
    
    })



    // 팝업에 스팬을 클릭했을때 팝업이 닫혀라.
    $('.gal_popUp span').click(function(){
        
      
        $('.gal_popUp').fadeOut();
        $('.gal_popUpBox ul').removeClass('on');
        $('.gal_popUpBox ul.on li').removeClass('on')
        $('.gal_popUpBox ul.on li').eq(0).addClass('on')
        $('body').css({'overflow-y':'scroll'})
        
    });

})
