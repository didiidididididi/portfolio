$(document).ready(function(){

    // 갤러리이미지 움직임설정


    // 왼쪽버튼을 클릭시 이미지가 왼쪽으로 이동
        let i = 0
    $('.gallery .left').click(function(){
        if(i<5)i++;

        let gwd = $('.gallery li').width()
        $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200)
        
        $('.gallery li').removeClass('on')
        $('.gallery li').eq(i).addClass('on')
        $('.gallery li').eq(i-1).animate({'opacity':0},100)
    })


    // 오른쪽버튼을 클릭시 이미지가 오른쪽으로 이동

    $('.gallery .right').click(function(){
        if(i>0)i--;

        let gwd = $('.gallery li').width()
        $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200)
        
        $('.gallery li').removeClass('on')
        $('.gallery li').eq(i).addClass('on')
        $('.gallery li').eq(i).animate({'opacity':1},100)
    })

    // 리뷰 움직임 설정
    // 왼쪽버튼 클릭시 왼쪽으로 이동
        let r = 0
        $('.review .left').click(function(){
            if(r<2)r++;

            let rwd = $('.review li').width()
            $('.review ul').stop().animate({'left':r*-(rwd+10)},200)
            $('.review li').removeClass('on')
            $('.review li').eq(r).addClass('on')
            $('.review li').eq(r-1).animate({'opacity':0},100)
        })
    // 오른쪽버튼 클릭시 오른쪽으로 이동
    $('.review .right').click(function(){
        if(r>0)r--;

        let rwd = $('.review li').width()
        $('.review ul').stop().animate({'left':r*-(rwd+10)},200)
        $('.review li').removeClass('on')
        $('.review li').eq(r).addClass('on')
        $('.review li').eq(r).animate({'opacity':1},100)
    })

})