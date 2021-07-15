(function($) {
    "use strict";
	
	/* ..............................................
	Loader 
    ................................................. */
	
	$(window).on('load', function() { 
		$('.preloader').fadeOut(); 
		$('#preloader').delay(550).fadeOut('slow'); 
		$('body').delay(450).css({'overflow':'visible'});
	});
	
	/* ..............................................
    Map Full
    ................................................. */
	
	$(document).ready(function(){ 

		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) { 
				$('#back-to-top').fadeIn();
				$('#up_page').fadeIn(); 
			} else { 
				$('#back-to-top').fadeOut();
				$('#up_page').fadeOut(); 
				$('#up_page').css({
					color: '#fff'
				});
			} 
		}); 

		$('#up_page').on('click', function() {
			$('html, body').animate({scrollTop: 0}, 600);
		});

		var $doc = $('html, body');
		$('.scrollSmooth').click(function() {
			$('.checkbtn').click();
		    $doc.animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 500);

		    return false;
		});
	});

	/*-------- Responsive menu ----------------------------------*/

	const menuLista = document.querySelector('.navegacao__conteudo');
	const navegacao = document.querySelector('.navegacao');
	const btnToggle = document.querySelector('.menu-bars-container');

	var checked = false;

	btnToggle.addEventListener('click', function(e) {

		e.preventDefault();

		if(checked) {
			navegacao.classList.remove('heightViewport');
			menuLista.classList.remove('showDisplay');
			checked = false;
		} else {
			navegacao.classList.add('heightViewport');
			menuLista.classList.add('showDisplay');
			checked = true;
		}

	});

	
	
}(jQuery));