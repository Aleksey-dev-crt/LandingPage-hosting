$(function() {

	// Fixed header
	let header = $("#header");
	let header__inner = $("#header__inner");
	let intro = $("#intro");
	let headerH = header.innerHeight();
	let ScrollPos = $(window).scrollTop();

	$(window).on("scroll load resize", function() {
		headerH = header.innerHeight();

		ScrollPos = $(this).scrollTop();

		if (ScrollPos >= headerH) {
			header.addClass("fixed");
			header__inner.addClass("fixed");
		}
		else {
			header.removeClass("fixed");	
			header__inner.removeClass("fixed");	
		}

	});

	// Smooth scroll
	$("[data-scroll]").click(function(event){
		event.preventDefault();

		let blockID = $(this).data('scroll');
		let blockOffset = $(blockID).offset().top;

		$('#nav').removeClass("active");
		$("#burger").removeClass("active");

		
		$("html, body").animate({
			scrollTop: blockOffset-70
		}, 500);

	});

	// Nav Toggle
	$("#burger").click(function(event){
		event.preventDefault();

		$('#nav').toggleClass("active");
		$("#burger").toggleClass("active");			
			
	});

	// testimonials: https://kenwheeler.github.io/slick/
	let slider = $("#Testimonials");

	$("[data-slider]").slick({
			  infinite: true,
			  fade: false,
			  slidesToShow: 1,
			  slidesToScroll: 1,
		    arrows: false,
		  	dots: true
		});

	// Plans
	$(".plan__item").each(function (index, elem) {
		const i = $(elem).val(index);
		 $(i).hover(function(){

		 	$(this).toggleClass("active");		
		 	$(this).children().toggleClass("active");		
		 	$(this).find('*').children().toggleClass("active");		

		 	});
	});

});