var changeCircle = function(){


	
	$('.circle ').mouseenter(function()
	{
		$(this).addClass('circle2','slow');
	});
	
	$('.circle').mouseleave(function(){
	
		$(this).removeClass('circle2', 'slow')
	});
};

//function to change background while scrolling
$(document).ready(function(){

	 $(window).scroll(function () {
                    if ($(this).scrollTop() > 550 && $(this).scrollTop()<1000 ) {
                       $("body").css("background-image","url(http://img09.deviantart.net/ff7a/i/2015/123/8/a/flat_landscape_by_ben_aka_riot-d8s19au.png)")
					   $("body").css("background-attachment","fixed");
					   $('body').addClass('hey')
					   
					}
					else if($(this).scrollTop() < 400)
						{
							$('body').css("background","url(http://i.imgur.com/kk1ZaZr.jpg)")
							$('body').css("background-attachment","fixed")
							$('body').css("background-size","100% 100%")
							
						}
						else if($(this).scrollTop()>=1000)
						{
							$('body').css("background","url(http://i.imgur.com/q8YiK1v.jpg)")
							$('body').addClass('hey')
							$('body').css("background-attachment","fixed")
							$('body').css("background-size","100% 100%")
							
						}

					
                });  

});

var main = function() {
 
  $('.icon-menu').click(function() {
    $('.menu').animate({
      right: "0px"
    }, 500);

    $('body').animate({
      right: "285px"
    }, 500);
	
	$('.icon-menu').hide();
  });

  
  $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-285px"
    }, 200);
	
    $('body').animate({
      right: "0px"
    }, 200);
	
	$('.icon-menu').show();
	
	
  });
};

$(document).ready(changeCircle);
$(document).ready(main);