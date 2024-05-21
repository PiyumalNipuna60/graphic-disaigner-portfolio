<!-- Header -->	 
$(".header-two").cbSlideDownHeader({
    zIndex: 1001,
    //headerClone: true,
    //fullscreenView: true
  });
  $(".header-one").cbSlideUpHeader({
    zIndex: 30,
	//headerClone: true,
    //fullscreenView: true
    //slideDownCallback: function () {alert("aaa");}
  });





<!-- Smooth Scrol -->	 
$(function(){

var $window = $(window);		//Window object

var scrollTime = 0.6;			//Scroll time
var scrollDistance = 355;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

$window.on("mousewheel DOMMouseScroll", function(event){

event.preventDefault();	

var delta = event.originalEvent.wheelDelta/125 || -event.originalEvent.detail/3;
var scrollTop = $window.scrollTop();
var finalScroll = scrollTop - parseInt(delta*scrollDistance);

TweenMax.to($window, scrollTime, {
scrollTo : { y: finalScroll, autoKill:true },
ease: Power1.easeOut,	
autoKill: true,
overwrite: 5							
});

});

});







<!-- FunFacts -->
(function($) {
		"use strict";
		function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 10; /* Where 50 is increment */	
		$this.html(++current);
			if(current > $this.data('count')){
				$this.html($this.data('count'));
			} else {    
				setTimeout(function(){count($this)}, 1);
			}
		}        	
		$(".stat-count").each(function() {
		  $(this).data('count', parseInt($(this).html(), 10));
		  $(this).html('0');
		  count($(this));
		});
   })(jQuery);







<!-- Client Words Carousel -->	
$(document).ready(function() {
 
  $("#client-words").owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    navigation:true,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true,
    
  });
 
});










<!-- Services Tabs -->	
/* jQuery activation and setting options for the tabs*/
var tabbedNav = $("#tabbed-nav").zozoTabs({
orientation: "horizontal",
theme: "silver",
position: "top-left",
size: "medium",
animation: {
duration: 600,
easing: "easeOutQuint",
effects: "fade"
},
defaultTab: "tab1"
});







<!-- About Slide Carousel -->

$(document).ready(function() {
 
  $("#about-slide").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});




//PreLoader
;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery)

//PAGE LOADER//
$(document).ready(function(){
    setTimeout(function(){
        $('body').addClass('loaded');

    }, 3000);
});
  