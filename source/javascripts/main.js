//= require "_modernizr.custom.84369"
//= require "_jquery-1.11.3.min"
//= require "_jquery.mixitup.min"

// custom jquerymobile (popups w/ arrows only)
//= require "_jquery.mobile.custom.min"


// Open external links in new tab/window
$(function() {
	$('a').each(function() {
	   var a = new RegExp('/' + window.location.host + '/');
	   if(!a.test(this.href)) {
	       $(this).click(function(event) {
	           event.preventDefault();
	           event.stopPropagation();
	           window.open(this.href, '_blank');
	       });
	   }
	});
});

// Applies Mixitup to river of content
$(function(){
	// Instantiate MixItUp:
	$('#river').mixItUp({
	load: {
		sort: 'date:desc'
	}
});
});