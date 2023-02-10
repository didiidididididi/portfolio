$(document).ready(function(){

    // 오른쪽 화살표를 클릭했을때 메인슬라이드 텍스트와 이미지가 바뀌어라
    $('.next_btn').click(function(){
        let i = $(this).index()
        $('.mainImg_img li').eq(i).addClass('on')
    })


})