class CarouselView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    templateCarouselViewOne() {
        return `
        <div onclick="controller" class="carousel__container-img img-thumbnail">
            <img class="carousel__img" src="img/img_02.jpeg" alt="">
        </div>
        `;
    }
}