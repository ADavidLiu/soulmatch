class Gallery {
    constructor() {
        this.$btn = $(".matching__profile-gallery-trigger");
        this.$close = $(".popup-gallery__btn");
        this.$popup = $(".popup-gallery");
        this.$slider = $(".popup-gallery__slider");

        this.$next = $(".popup-gallery__trigger--next");
        this.$prev = $(".popup-gallery__trigger--prev");

        this.$current = $(".popup-gallery__current");
        this.$total = $(".popup-gallery__total");

        this.$close.click(this.toggleGallery);
        this.$btn.click(this.toggleGallery);

        this.$slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: false
        });

        this.$next.click(() => {
            this.$slider.slick("slickNext");
        });

        this.$prev.click(() => {
            this.$slider.slick("slickPrev");
        });

        this.$total.text(this.$slider.slick("getSlick").slideCount);

        this.$slider.on("afterChange", () => {
            this.$current.text(this.$slider.slick("slickCurrentSlide") + 1);
        });
    }

    toggleGallery = () => {
        this.$popup.toggleClass("popup-gallery--active");
    }
}