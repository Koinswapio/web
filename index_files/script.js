(function($){'use strict';var $window=$(window);$window.on("scroll",function(){if
($(document).scrollTop()>86){$("#banner").addClass("shrink");}
else
{$("#banner").removeClass("shrink");}});if($.fn.owlCarousel){$(".client_slides").owlCarousel({responsive:{0:{items:1},991:{items:2},767:{items:1}},loop:true,autoplay:true,smartSpeed:700,dots:true});var dot=$('.client_slides .owl-dot');dot.each(function(){var index=$(this).index()+1;if(index<10){$(this).html('0').append(index);}else{$(this).html(index);}});}
if($.fn.magnificPopup){$('#videobtn').magnificPopup({type:'iframe'});$('.open-popup-link').magnificPopup({type:'inline',midClick:true});$('.open-signup-link').magnificPopup({type:'inline',midClick:true});$('.gallery_img').magnificPopup({type:'image',gallery:{enabled:true},removalDelay:300,mainClass:'mfp-fade',preloader:true});}
$window.on('load',function(){$('#preloader').fadeOut('1000',function(){$(this).remove();});});if($.fn.scrollUp){$.scrollUp({scrollSpeed:1500,scrollText:'Scroll Top'});}
if($.fn.onePageNav){$('#nav').onePageNav({currentClass:'active',scrollSpeed:1500,easing:'easeOutQuad'});}
if($.fn.counterUp){$('.counter').counterUp({delay:10,time:2000});}
if($window.width()>767){new WOW().init();}
(function(){var dd=$('dd');dd.filter(':nth-child(n+3)').hide();$('dl').on('click','dt',function(){$(this).next().slideDown(500).siblings('dd').slideUp(500);})})();if($.fn.niceScroll){$(".timelineBody").niceScroll();}
$('.simple_timer').syotimer({year:2022,month:8,day:16,hour:0,minute:0})})(jQuery);