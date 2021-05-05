let template = document.querySelector('#template');
const carouselImgDois = document.querySelector('#img_02');
const carouselImgTres = document.querySelector('#img_03');
const carouselImgQuatro = document.querySelector('#img_04');
const carouselImgCinco = document.querySelector('#img_05');
const carouselImgSeis = document.querySelector('#img_06');


carouselImgDois.addEventListener('click', function(){
	
	template.innerHTML = `
	<div id="img_02" class="carousel__container-img img-thumbnail">
		<img class="carousel__img" src="img/img_02.jpeg" alt="">
	</div>
	`;

	return template;

});

carouselImgTres.addEventListener('click', function(){
	
	template.innerHTML = `
	<div id="img_03" class="carousel__container-img img-thumbnail">
		<img class="carousel__img" src="img/img_03.jpeg" alt="">
	</div>
	`;

	return template;

});

carouselImgQuatro.addEventListener('click', function(){
	
	template.innerHTML = `
	<div id="img_04" class="carousel__container-img img-thumbnail">
		<img class="carousel__img" src="img/img_04.jpeg" alt="">
	</div>
	`;

	return template;

});

carouselImgCinco.addEventListener('click', function(){
	
	template.innerHTML = `
	<div id="img_05" class="carousel__container-img img-thumbnail">
		<img class="carousel__img" src="img/img_05.jpeg" alt="">
	</div>
	`;

	return template;

});

carouselImgSeis.addEventListener('click', function(){
	
	template.innerHTML = `
	<div id="img_06" class="carousel__container-img img-thumbnail">
		<img class="carousel__img" src="img/img_06.jpeg" alt="">
	</div>
	`;

	return template;

});