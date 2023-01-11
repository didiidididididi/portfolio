$(document).ready(function(){
    $(window).scroll(function(){
        let sc = $(window).scrollTop()
        $('section').stop().animate({'left':sc},600)
    })
})