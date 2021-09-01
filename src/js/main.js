import slick from "./slick";
import compareCarousel from "./components/compare-carousel";
import "../scss/styles.scss";

window.addEventListener("DOMContentLoaded", function () {
    compareCarousel.init();
    slick.init(); //init after dataset is loaded
})


