import data from "../../data/carouselData.json"

const compareCarousel = {
    init() {
        const dataCarousel = document.querySelector('.carousel__comparison')
        if (!dataCarousel) {
            return
        }
        dataCarousel.innerHTML = this.carouselBuiler(data, this.carouselTemplate)
    },
    carouselBuiler(data, template) {
        let html = ``;
        data.productDetails.map(obj => {
            html += template(obj)
        })
        return html
    },
    carouselTemplate(obj) {
        const template = `
            <div class="carousel__slide">
                <div class="carousel__slide-content">
                    <div class="carousel__slide-header">
                        <h2 class="carousel__slide-title">${obj.title ? "obj.title" : ""}</h2>
                        <ul class="carousel__slide-palette">${obj.colors ? generateColors(obj.colors) : ""}</ul>
                    </div>
                    <div class="carousel__slide-body">
                        <p class="carousel__line-item">${obj.TakeoffWeight ? obj.TakeoffWeight : ""}</p>
                        <p class="carousel__line-item">${obj.MaxDescentSpeed ? obj.MaxDescentSpeed : ""}</p>
                        <p class="carousel__line-item">${obj.MaxFlightTime ? obj.MaxFlightTime : ""}</p>
                        <div>
                            ${obj.ctaUrl ? `<a class="carousel__slide-cta" href="${obj.ctaUrl ? obj.ctaUrl : ""}">${obj.cta ? obj.cta : ""}</a>` : ''}
                        </div>
                    </div>
                </div>
            </div>
            `

        function generateColors(arr) {
            let html = ``
            arr.map((color) => {
                html += `<li><span class="${color} carousel__palette-color"></span></li>`
            })
            return html
        }

        return template;
    }

}

export default compareCarousel;
