class Matchings {
    constructor() {
        this._$slider = $(".matching__slider");
        this._$slider.slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: true,
                        appendArrows: $(".matching__slider-controls"),
                        prevArrow: "<div class='matching__slider-arrow matching__slider-arrow--prev'><img src='images/i-chevron.svg' class='matching__slider-arrow-icon'></div>",
                        nextArrow: "<div class='matching__slider-arrow matching__slider-arrow--next'><img src='images/i-chevron.svg' class='matching__slider-arrow-icon'></div>"
                    }
                }
            ]
        });
    }
}