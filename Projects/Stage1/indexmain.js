$(document).ready(function(){
    $('.pull-me').hover(function(){
        $('.panel').slideToggle('slow');
        $(this).addClass('active');
    	},
    	function(){
    		$(this).removeClass('active');    		
    	}
        );
    });


$(document).ready( function () {
   $('#Drag').draggable(); 
});





