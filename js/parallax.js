//smooth scrolling for the navbar

 $(document).ready(function() {
     $("#toTop").hide();
	 
		$(document).ready(function(){
    
        $('circle').click(function(){
            
            $(this).effect('explode')
            
            })
    
    });
            // fade in & out
       $(window).scroll(function () {
                    if ($(this).scrollTop() > 400) {
                        $('#toTop').fadeIn();
                    } else {
                        $('#toTop').fadeOut();
                    }
                });     
  $(' nav a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) 
	{
	
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
	  
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
	  
       if ($target) {
	   
         var targetOffset = $target.offset().top;
		 
         $(this).click(function() {
		 
           $('html, body').animate({scrollTop: targetOffset}, 400);
		   
           return false;
		   
         });
      }
    }
  });

});
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});


//scroll speed
//The parallel scrolling

// Create cross browser requestAnimationFrame method:
//window.requestAnimationFrame = window.requestAnimationFrame
//|| window.mozRequestAnimationFrame
//|| window.webkitRequestAnimationFrame
 //|| window.msRequestAnimationFrame
//|| function(f){setTimeout(f, 1000/60)}
//var bubble1 = document.getElementByClassName('circle')
//var bubble2 = document.getElementById('section2')
//function parallaxbubbles(){
//var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
//bubble1.style.top = scrolltop * 0.1+ 'px' // move bubble1 at 20% of scroll rate
//bubble2.style.top = scrolltop * 0.9+ 'px' // move bubble2 at 50% of scroll rate
//}
//window.addEventListener('scroll', function(){ // on page scroll
//requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
//}, false)
