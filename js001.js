$(document).ready(function(){
    $('nav li').click(function(){

        let i = $(this).index();
        $('article').removeClass('on')
        $('article').eq(i).addClass('on');

    })

    $('nav li').eq(1).click(function(){

        $('header').addClass('on')
    })
    $('nav li').eq(2).click(function(){

        $('header').addClass('on')
    })
    $('nav li').eq(3).click(function(){

        $('header').addClass('on')
    })
    $('nav li').eq(0).click(function(){

        $('header').removeClass('on')
    })

})