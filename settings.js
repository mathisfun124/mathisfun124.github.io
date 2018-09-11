$(document).ready(function() {

	// search form click and click out
	$('.default-value').each(function() {
		var default_value = this.value;
		$(this).focus(function() {
			if(this.value == default_value) {
				this.value = '';
			}
		});
		$(this).blur(function() {
			if(this.value == '') {
				this.value = default_value;
			}
		});
	});

	// call superfish() for the containing ul element
        $('ul.sf-menu').superfish(); 

	// targeting Safari to make some fonts larger
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)
    		$('body').addClass('safari');

	// smooth fading slide show settings
	$('#home_slide_show') 
	.cycle({ 
		fx:     'fade', 
		timeout: 6000,
		speed: 2000,
		pause: true
	});

}); 
 
