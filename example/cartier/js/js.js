$(document).ready(function(){

    $('article').mouseenter(function(){
        let vid = $(this).find('video').get(0)
        vid.currentTime=0
        vid.play()

        $(this).stop().animate({'width':'35%'},1000)
        $(this).find('video').animate({'opacity':1},1200)

        $(this).find('h3').animate({'right':'50px'},800)
        $(this).find('p').animate({'right':'50px'},1000)


    });

    $('article').mouseleave(function(){
        let vid = $(this).find('video').get(0)
        vid.pause()
        
        $('article').stop().animate({'width':'12%'},1000)
        $(this).find('video').animate({'opacity':0},500)

        $(this).find('h3').animate({'right':'-300px'},800)
        $(this).find('p').animate({'right':'-300px'},500)
    });


})