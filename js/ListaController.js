class ListaController {
    constructor() {
        let listaTemplate = document.querySelector.bind('#lista__template');
        let carouselTemplate = document.querySelector.bind('#carousel__template');

        this._listaView = new ListaView(listaTemplate);
        this._carouselView = new CarouselView(carouselTemplate);
    }

    importaTemplate(event) {

        event.preventDefault();

        console.log('oi');

        this._listaView.update();

    }

    importaTemplateCarousel() {

        this._carouselView.templateCarouselViewOne();
    }
}
