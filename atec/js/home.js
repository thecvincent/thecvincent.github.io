/* atec home */
$(document).ready(function() {
  $('header').hide();
	$('header').css('top','-64px');
	$('body').css('backgroundPosition','50% 0px');
	$('#lenticular-header *').hide();
	//$('#wall').hide();
	$('#social').hide();
	$('#gallery').hide();
	$('#lenticular-footer').hide();
	$('footer').hide();
	//now show them
	$(function fadeItem() {
		$('nav').delay(500).fadeIn(fadeItem).animate({top:'0'},200);
		$('body').delay(900).fadeIn(fadeItem).animate({backgroundPosition:'50% 60'},200);
		$("#lenticular-header *").delay(600).fadeIn(fadeItem);
		//$("#wall").delay(900).fadeIn(fadeItem);
		$("#social").delay(1200).fadeIn(fadeItem);
		$("#gallery").delay(1500).fadeIn(fadeItem);
		$("#lenticular-footer").delay(1800).fadeIn(fadeItem);
	});
});
//hide elements on load
