$(document).ready(function(){
    
    let ht = $(window).height();

    $('section').height(ht);

    $('nav li').click(function(e){
        e.preventDefault();
        let i = $(this).index();

        $('html,body').stop().animate({scrollTop:ht*i},800,'easeInBounce')
    })

})