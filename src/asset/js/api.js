import $ from 'jquery';

$(document).ready(function(){

	var collapseTotal = $('.collapseContainer').length;
	for(var i=0;i<collapseTotal;i++){
		if($('.collapseContainer:eq('+i+')').data('default') == 'expand'){
			$('.collapseContainer:eq('+i+')').addClass('expand');
		};
	}

	$('.collapseTitle').bind("click",function(){
		if($(this).parent().hasClass('expand')){
			$(this).parent().removeClass('expand');
		}else{
			$(this).parent().addClass('expand');
		}
	});
});

