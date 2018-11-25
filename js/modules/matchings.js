class Matchings {
    constructor(swipesCount) {
        this._$window = $(window);
        this._swipesCount = swipesCount;

        this._$slider = $(".matching__slider-list");
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

        this._$slider.on("afterChange", (e, slick, currentSlide) => {
            const $currentSlide = $(".matching__slider-item").eq(currentSlide + 1);
            if (!$currentSlide.hasClass("matching__slider-item--viewed")) {
                const currentCount = $(".header__swipes span").text();
                let newCount = parseInt(currentCount) - 1;
                $(".header__swipes span").text(newCount)
                if (newCount <= 0) {
                    newCount = 0;
                    $(".header__swipes span").text(0);
                    this._$slider.addClass("matching__slider-list--disabled");
                }
                this._swipesCount.checkCount(newCount);
            }
            $currentSlide.addClass("matching__slider-item--viewed");
        });

        $(".matching__actions-inner-track").overlayScrollbars({});

        this._$interestsContainer = $(".matching__actions .container");
        this._$interestsInner = $(".matching__actions-inner");
        this._$interestsTrack = $(".matching__actions-inner-track");
        this._$interestsGroup = $(".matching__actions-group").not(".matching__actions-group--incomplete");

        this.resizeInterests();
        this._$window.resize(this.handleResize);
    }
    
    resizeInterests = () => {
        this._$interestsGroup.css("width", this._$interestsContainer.width() + "px");

        let trackWidth = 0;
        this._$interestsGroup.each(function(i) {
            const $this = $(this);
            trackWidth += $this.innerWidth();
        });
    }

    handleResize = () => {
        this.resizeInterests();
    }
}