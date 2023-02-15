$(document).ready(function(){

    // 오른쪽 화살표를 클릭했을때 메인슬라이드 텍스트와 이미지가 바뀌어라

    let i = 0
    $('.next_btn').click(function(){
      if(i<=4) i++;
      if(i==5) i=0;
      console.log(i)
        $('.mainImg_img li').removeClass('on')
        $('.mainImg_txt>div').removeClass('on')


        $('.mainImg_img li').eq(i).addClass('on')
        $('.mainImg_txt>div').eq(i).addClass('on')
    })
    
    $('.prev_btn').click(function(){
        
      if(i==0) i=5;
      if(i>0) i--;
        
        console.log(i)
        
          $('.mainImg_img li').removeClass('on')
          $('.mainImg_txt>div').removeClass('on')
  
  
          $('.mainImg_img li').eq(i).addClass('on')
          $('.mainImg_txt>div').eq(i).addClass('on')
      })

      // 장바구니 담기
      let ii=0
      $('.new_box21 li , .health_box21 li').click(function(){
      ii++
  
          $('.shop span').text(ii)
      })
  

})