$(document).ready(function(){
    $('nav li').click(function(){

        let i = $(this).index();
        $('article').removeClass('on')
        $('article').eq(i).addClass('on');
        $('.moon').addClass('on')

        if(i==2){
        $('.ps li').eq(1).stop().animate({'height':'90%'},1800)
        $('.ai li').eq(1).stop().animate({'height':'85%'},1800)
        $('.html li').eq(1).stop().animate({'height':'95%'},1800)
        $('.css li').eq(1).stop().animate({'height':'85%'},1800)
        $('.js li').eq(1).stop().animate({'height':'80%'},1800)
        $('.figma li').eq(1).stop().animate({'height':'75%'},1800)
        }
        else{
            $('.ps li').eq(1).stop().animate({'height':'0'},1800)
            $('.ai li').eq(1).stop().animate({'height':'0'},1800)
            $('.html li').eq(1).stop().animate({'height':'0'},1800)
            $('.css li').eq(1).stop().animate({'height':'0'},1800)
            $('.js li').eq(1).stop().animate({'height':'0'},1800)
            $('.figma li').eq(1).stop().animate({'height':'0'},1800)
        }


    })

    $('nav>ul>li').eq(1).click(function(e){
        e.preventDefault()
        $('header').addClass('on')
        $('.logo').addClass('on')
    })
    $('nav>ul>li').eq(2).click(function(e){
        e.preventDefault()
        $('header').addClass('on')
        $('.logo').addClass('on')
    })
    $('nav>ul>li').eq(3).click(function(e){
        e.preventDefault()
        $('header').addClass('on')
        $('.logo').addClass('on')
    })
    $('nav>ul>li').eq(0).click(function(){
        $('header').removeClass('on')
        $('.moon').removeClass('on')
        $('.logo').removeClass('on')
    })

    // #show_olive 클릭했을때 해당 팝업이 열려라
    $('#show_olive').click(function(){
        let abc = $(this).index()
        console.log(abc)

        $('#popUp').fadeIn();
        $('.popUp div').eq(1).addClass('on')
    })

    // #show_grboy 클릭했을때 해당 팝업이 열려라
    $('#show_grboy').click(function(){

        $('#popUp').fadeIn();
        $('.popUp div').eq(2).addClass('on')
    })

    // #show_aqua 클릭했을때 해당 팝업이 열려라
    $('#show_aqua').click(function(){

        $('#popUp').fadeIn()
        $('.popUp div').eq(0).addClass('on')
    })



    // 팝업에 span을 클릭했을때 팝업이 닫혀라
    $('.popUp span').click(function(){

        $('#popUp').fadeOut();
        $('.popUp div').removeClass('on')
    })


})


// 별 애니메이션

function init() {

    //estrelas

    var style = ["style1", "style2", "style3", "style4"];
    var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    var opacity = [
        "opacity1",
        "opacity1",
        "opacity1",
        "opacity2",
        "opacity2",
        "opacity3"
    ];

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var estrela = "";
    var qtdeEstrelas = 250;
    var noite = document.querySelector(".constelacao");
    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;

    for (var i = 0; i < qtdeEstrelas; i++) {
        estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] +
                " " + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +
                getRandomArbitrary(0, 9) + "s; left: " + getRandomArbitrary(0, widthWindow) + "px; top: " +
                getRandomArbitrary(0, heightWindow) + "px;'></span>";
    }

    noite.innerHTML = estrela;

    //meteoros

    var numeroAleatorio = 5000;

    setTimeout(function () {
        carregarMeteoro();
    }, numeroAleatorio);

    function carregarMeteoro() {
        setTimeout(carregarMeteoro, numeroAleatorio);
        numeroAleatorio = getRandomArbitrary(5000, 10000);
        var meteoro = "<div class='meteoro " + style[getRandomArbitrary(0, 4)] + "'></d" +
                "iv>";
        document
            .getElementsByClassName('chuvaMeteoro')[0]
            .innerHTML = meteoro;
        setTimeout(function () {
            document
                .getElementsByClassName('chuvaMeteoro')[0]
                .innerHTML = "";
        }, 1000);
    }

}

window.onload = init;