(function($){  
	$.fn.checktick = function(options) {  

	var defaults = {  
		style : null
	};  
	var opt = $.extend(defaults, options);  

	return this.each(function() {  
		var obj = $(this); 
		$('body').addClass('has-js');
		if(opt.style === 'checked'){
			$(this).find('label').addClass('label_check');		
		}

		if(opt.style === 'radio'){
			$(this).find('label').addClass('label_radio');
		}
		
		function setupLabel() {

			if ($('.label_check input').length) {
				$('.label_check').each(function(){ 
					$(this).removeClass('c_on');
				});
				$('.label_check input:checked').each(function(){ 
					$(this).parent('label').addClass('c_on');
				});                
			}

			if ($('.label_radio input').length) {
				$('.label_radio').each(function(){ 
					$(this).removeClass('r_on');
				});
				$('.label_radio input:checked').each(function(){ 
					$(this).parent('label').addClass('r_on');
				});
			}
		}

		/*Toggle click function*/
		$('.label_check, .label_radio').click(function(){
			setupLabel();
		});

		
		/* Run on ready */	
		setupLabel(); 
		
		
		});  
	};  
})(jQuery);  
