//@prepros-prepend "modules/menu.js";
//@prepros-prepend "modules/matchings.js";
//@prepros-prepend "modules/popupManager.js";

$(document).ready(function () {
    
    if ($(".nav-mobile").length > 0) {
        const menu = new Menu();
    }

    if ($(".matching__slider").length > 0) {
        const matchings = new Matchings();
    }

    if ($(".popup").length > 0) {
        const popupManager = new PopupManager();
    }

    if ($(".messages__btn").length > 0) {
        $(".messages__btn").click(e => {
            const $this = $(e.currentTarget);
            const $label = $this.children();
            const text = $label.text();
            $this.toggleClass("btn--border");
            $label.toggleClass("u-color-gradient");
            if (text === "INVITE") {
                $label.text("INVITED");
            } else {
                $label.text("INVITE");
            }
        });
    }

    if ($(".registration__interest").length > 0) {
        $(".registration__interest").click(e => {
            const $this = $(e.currentTarget);
            $this.toggleClass("registration__interest--active");
        });
    }

    if ($("[data-max-words]").length > 0) {
        $("[data-max-words]").each(function(i) {
            const $this = $(this);
            const $label = $(`[data-label-target=${$this.attr("data-label")}]`);
            const maxCount = $this.attr("data-max-words");
            $this.on("input", () => {
                const wordsCount = $this.val().split(" ").length;
                if ($this.val() === "") {
                    $label.text(maxCount);
                } else {
                    $label.text(maxCount - wordsCount);
                }
            });
        });
    }

    if ($(".registration__photos").length > 0) {
        let offset = 0;
        const $window = $(window);
        const $body = $("body");
        const $registration = $(".registration");
        if ($window.width() >= 576) {
            offset = ($body.width() - $registration.width())/2;
        }
        $window.resize(() => {
            if ($window.width() >= 576) {
                offset = ($body.width() - $registration.width())/2;
                $slider.slick("unslick");
                const updatedOpts = {
                    mobileFirst: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "60px",
                    arrows: false,
                    dots: false,
                    autoplay: false,
                    infinite: false,
                    initialSlide: 1,
                    responsive: [
                        {
                            breakpoint: 576,
                            settings: {
                                centerPadding: offset + "px"
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                centerPadding: `calc(${(offset + "px")} - .75rem)`
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                centerPadding: `calc(${(offset + "px")} - .75rem)`
                            }
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                centerPadding: `calc(${(offset + "px")} - .75rem)`
                            }
                        },
                        {
                            breakpoint: 1460,
                            settings: {
                                centerPadding: `calc(${(offset + "px")} - .75rem)`
                            }
                        }
                    ]
                }
                $slider.slick(updatedOpts);
            }
        });

        const initialOpts = {
            mobileFirst: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "60px",
            arrows: false,
            dots: false,
            autoplay: false,
            infinite: false,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        centerPadding: offset + "px"
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: `calc(${(offset + "px")} - .75rem)`
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        centerPadding: `calc(${(offset + "px")} - .75rem)`
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        centerPadding: `calc(${(offset + "px")} - .75rem)`
                    }
                },
                {
                    breakpoint: 1460,
                    settings: {
                        centerPadding: `calc(${(offset + "px")} - .75rem)`
                    }
                }
            ]
        }

        const $slider = $(".registration__photos");
        $slider.slick(initialOpts);

        const $delete = $(".registration__photos-item-delete");
        $delete.click(e => {
            const $this = $(e.currentTarget);
            const $item = $this.parent();
            const index = $item.index();
            $(".registration__photos-item").eq(index).fadeOut("fast", () => {
                /* $(".registration__photos-item").eq(index).remove(); */
                $slider.slick("slickRemove", index);
            });
        });
    }

    if ($(".range").length > 0) {
        const slider = document.getElementById("range");
        noUiSlider.create(slider, {
            start: [21, 33],
            connect: true,
            tooltips: true,
            format: {
                to: function (value) {
                    return value + '';
                },
                from: function (value) {
                    return value.replace(',-', '');
                }
            },
            step: 1,
            range: {
                "min": 18,
                "max": 50
            }
        });
    }
    
});