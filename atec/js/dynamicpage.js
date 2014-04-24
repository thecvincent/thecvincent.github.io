/* change it out 
*/
$(function() {
    var newHash      = "",
        $mainContent = $("#mainc"),
        $pageWrap    = $("#main"),
        baseHeight   = 0,
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    $("#grid").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
	
		$(window).bind('hashchange', function(){    
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
            $mainContent
                .find("#grid")
                .fadeOut(200, function() {
                    $mainContent.hide().load(newHash + " #grid", function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $("#grid a").removeClass("current");
                        $("#grid a[href="+newHash+"]").addClass("current");
                    });
                });
        };
    });
		
    
    $(window).trigger('hashchange');
});