//@prepros-prepend "modules/menu.js";
//@prepros-prepend "modules/matchings.js";
//@prepros-prepend "modules/popupManager.js";
//@prepros-prepend "modules/gallery.js";
//@prepros-prepend "modules/swipesCount.js";

$(document).ready(function () {
    
    if ($(".nav-mobile").length > 0) {
        const menu = new Menu();
    }

    if ($(".header__swipes").length > 0  && $(".matching__slider").length === 0) {
        const swipesCount = new SwipesCount();
    }

    if ($(".matching__slider").length > 0) {
        const swipesCount = new SwipesCount();
        const matchings = new Matchings(swipesCount);
    }

    if ($(".popup").length > 0) {
        const popupManager = new PopupManager();
    }

    if ($(".popup-gallery").length > 0) {
        const gallery = new Gallery();
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

        const deleteSlide = e => {
            const $this = $(e.currentTarget);
            const $item = $this.parent();
            const index = $item.index();
            $(".registration__photos-item").eq(index).fadeOut("fast", () => {
                $slider.slick("slickRemove", index);
            });
        }

        const $slider = $(".registration__photos");
        $slider.slick(initialOpts);

        const $delete = $(".registration__photos-item-delete");
        $delete.click(deleteSlide);

        const readURL = input => {
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const src = e.target.result;
                    const newSlide = `<div class="registration__photos-item" style="background-image: url('${src}');">
                    <img src="images/i-delete.svg" alt="Delete" class="registration__photos-item-delete">
                    </div>`;
                    const $newSlide = $(newSlide);
                    $newSlide.find(".registration__photos-item-delete").click(deleteSlide);
                    $slider.slick("slickAdd", $newSlide, 0, true);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        $(".registration__photos-browse-input").change(function() {
            readURL(this);
        });
    }
   

    if ($(".range").length > 0) {
        const $slider = $("#range");
        const slider = $slider[0];
        /* Added reference to inputs */
        const ageMin = $("#age_min");
        const ageMax = $("#age_max");

        /* Read initial values, if available */
        let initialMin = $slider.attr("data-initial-min");
        let initialMax = $slider.attr("data-initial-max");

        if (initialMin == undefined && initialMax == undefined) {
            initialMin = 18;
            initialMax = 38;
        }

        noUiSlider.create(slider, {
            start: [initialMin, initialMax],
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
            step: 20,
            range: {
                "min": 18,
                "max": 100
            }
        });
        let prevValues = [18, 38];
        let newMinVal = 0;
        let newMaxVal = 0;
        ageMin.val(prevValues[0]);
        ageMax.val(prevValues[1]);
        slider.noUiSlider.on("slide", (values, handle, unencoded, tap, positions) => {
            if (handle === 0) {
                if (values[0] < prevValues[0]) {
                    slider.noUiSlider.set([values[0], parseInt(values[1]) - 20]);
                    newMinVal = values[0];
                    newMaxVal = parseInt(values[1]) - 20;
                } else {
                    slider.noUiSlider.set([values[0], parseInt(values[1]) + 20]);
                    newMinVal = values[0];
                    newMaxVal = parseInt(values[1]) + 20;
                }
            } else {
                if (values[1] < prevValues[1]) {
                    slider.noUiSlider.set([parseInt(values[0]) - 20, values[1]]);
                    newMinVal = parseInt(values[0]) - 20;
                    newMaxVal = values[1];
                } else {
                    slider.noUiSlider.set([parseInt(values[0]) + 20, values[1]]);
                    newMinVal = parseInt(values[0]) + 20;
                    newMaxVal = values[1];
                }
            }
            prevValues = values;
            /* Updating inputs' values */
            ageMin.val(parseInt(newMinVal));
            ageMax.val(parseInt(newMaxVal));
        });
    }
    
});