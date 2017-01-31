console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {

   $('.head-slider').slick({
      infinite: true,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: false,
    });


    $('.post').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });    

   
    /*$('html').smoothScroll(300);*/

    /* placeholder*/       
    $('input, textarea').each(function(){
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function(){ $(this).attr('placeholder', '');});
        $(this).focusout(function(){             
            $(this).attr('placeholder', placeholder);           
        });
    });
    /* placeholder*/ 

    //nav

   $('.mobile-menu').click( function() {
    $('nav ul').toggleClass("showing");

  });

   $(".mobile-menu").click(function( e ) {
        e.stopPropagation();
        $(".mobile-menu").toggleClass("is-open");
    }); 

  //nav end 

  //cart

  $(".cart-block").click(function( e ) {
        e.stopPropagation();
        $(".cart").toggleClass("is-emersione");
    }); 


    $("body").click(function(e) { 
      var div = $(".cart"); 
      if (!div.is(e.target) 
          && !div.has(e.target).length) { 
        div.removeClass("is-emersione"); 
      }
    });

 //cart button

  $(".delete-link").click(function( e ) {       
       $(this).parents(".cart-item").addClass("is-close");
    });

  $(".icon-cart-close").click(function( e ) {       
       $(this).parents(".cart-item").addClass("is-close");
    });





    $('.button2').click(function() {       
      var count = parseInt($('.counter').text()) +1;      
      $('.counter').text(count);      
    });
  
    $('.button1').click(function() {      
      var count = parseInt($('.counter').text()) -1;
      if(count < 0) {
        return;
        }
      $('.counter').text(count);        
    });   

});




 








