$(document).ready(function(){
    // heghe header
    $(function(){
        $('.header').height($(window).height());

        $(window).resize(function(){
            $('.header').height($(window).height());
        })
        
    }) 
// loding-page
$(window).on('load',function(){

    $('.lodeng').fadeOut(2000);
})

    // venobox
    new VenoBox({
        selctor: '.venobox'
      })
    
     

    //   nav color
    $(window).scroll(function(){

        if($(window).scrollTop() >= 100){
            

            $('nav').css({
                'background-color' : '#040b2d',
                'padding' : '7px 0',
               
            })
            
        }else{
            $('nav').css({
                'background-color' : 'transparent',
                'padding' : '15px 0',
            })
           
        }
        
        //button up
        if($(window).scrollTop() >= 1000){

            $('.up').fadeIn(1000)
        }else{
            $('.up').fadeOut(1000)

        }
        
    })
    //clic onbutton
    $('.up').on('click',function(){

        $('body,html').animate({

            scrollTop : 0

        },500)
    })
    

// servsec
    $('.servsec .content .info i').on('click', function(){

    $(this).parent().parent().find('p').slideToggle(300);
    if($(this).hasClass('fa-plus-square')){
        $(this).attr('class', 'far fa-minus-square');
        $(this).css('color', 'red');
        $(this).siblings().css('color', 'red');
        

    }else{
        $(this).attr('class', 'far fa-plus-square'),
        $(this).css('color', '#040b2d');
        $(this).siblings().css('color', '#040b2d');
    };
    });
    
    //aos
   
   
  

    })
   