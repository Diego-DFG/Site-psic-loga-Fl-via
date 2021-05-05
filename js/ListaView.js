class ListaView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    update() {
        this._elemento.innerHTML = this.template();
    }

    template() {
        return `
        <div class="lista__template">
            <ul class="template__lista">
                <li><a class="ancora__template" href="#">DÚVIDAS FREQUENTES</a></li>
                <li><a class="ancora__template" href="#">BLOG</a></li>
                <li><a class="ancora__template" href="#">SUBLOCAÇÃO</a></li>
                <li><a class="ancora__template" href="#">UTILIDADE PÚBLICA</a></li>
            </ul>
        </div>
        `;
    }
}