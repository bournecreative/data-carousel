import data from "../../data/carouselData.json"

const compareCarousel = {
    init() {
        const dataCarousel = document.querySelector('.test')
        if (!dataCarousel) {
            return
        }
        console.log(data)
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
            <div class="content-wrapper">
                <h2>${obj.title}</h2>
                <p>${obj.TakeoffWeight}</p>
                <p>${obj.MaxDescentSpeed}</p>
                <p>${obj.MaxFlightTime}</p>
                <div>
                <a class="button" href="${obj.ctaUrl}">${obj.cta}</a>
                </div>
            </div >`
        return template;
    }

}

export default compareCarousel;
