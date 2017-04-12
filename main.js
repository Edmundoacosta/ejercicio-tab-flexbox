$(document).ready(function(){
	function change(){
		$('.tabs').find('li').click(function(){
			$('.tabs').find('li').removeClass('borde-btm');
			$(this).addClass('borde-btm');
		});
		$('.tabs2').find('li').click(function(){
			$('.tabs2').find('li').removeClass('borde-btm');
			$(this).addClass('borde-btm');
		});
		$('.tabs3').find('li').click(function(){
			$('.tabs3').find('li').removeClass('borde-btm');
			$(this).addClass('borde-btm');
		});
	}

	change();
});