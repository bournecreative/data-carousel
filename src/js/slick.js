import $ from 'jquery';
import 'slick-carousel';

const Slick = {
    init() {
        const slickCarousels = Array.from(document.querySelectorAll("[data-slick]:not(.slick-initialized)"));
        slickCarousels.forEach((carousel) => {
            $(carousel).slick();
        })
    }
}

export default Slick;
