import data from "../../data/carouselData.json"

const compareCarousel = {
    init() {
        const dataCarousel = document.querySelector('.dc__carousel')
        if (!dataCarousel) {
            return
        }
        dataCarousel.innerHTML = this.carouselBuiler(data, this.carouselTemplate)
    },
    carouselBuiler(data, template) {
        let html = ``;
        data.map(obj => {
            html += template(obj)
        })
        return html
    },
    carouselTemplate(obj) {
        const template = `
            <div class="dc__slide">
                <h2>${obj.title}</h2>
                <ul class="dc__palette">${generateColors(obj.colors)}</ul>
                    <p class="dc__line-item">${obj.TakeoffWeight}</p>
                    <p class="dc__line-item">${obj.MaxDescentSpeed}</p>
                    <p class="dc__line-item">${obj.MaxFlightTime}</p>
                <div>
                <a class="dc__cta" href="${obj.ctaUrl}">${obj.cta}</a>
                </div>
            </div >`

        function generateColors(arr) {
            let html = ``
            arr.map((color) => {
                html += `<li><span class="${color} dc__palette-color"></span></li>`
            })
            return html
        }

        return template;
    }

}

export default compareCarousel;
