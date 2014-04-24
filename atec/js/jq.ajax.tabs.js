$.fn.ajaxtabs = (function ()
{
	var id = $(this).attr('id');
	$('#'+id+' ul:first li ul li').click(function(){
		var ajaxlink = $(this).attr('link');
		$('#ajaxwrapper').html('<center><img src="/atec/img/el/ajax-loader.gif" /></center>');
		$.ajax({
			url: ajaxlink,
			success: function(html){
				$('#ajaxwrapper').html(html);
			}
		});
		if($(this).hasClass('selected').toString() == 'true'){
			var isselected = 1;
		}else{
			var isselected = 0;
		}
		$('.selected').removeClass('selected');

		if(isselected == 1){
			$(this).addClass('selected');
		}
		else{
			$(this).toggleClass('selected');
		}
	});

	var firstlink = $('#'+id+' ul:first li ul li.selected').attr('link');
	$.ajax({
		url: firstlink,
		success: function(html){
			$('#'+id).append('<div id="ajaxwrapper">'+html+'</div>');
		}
	});

});


//
$(document).ready(function(){
	$('#chart').ajaxtabs();
});