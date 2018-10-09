"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Menu=function t(){var i=this;_classCallCheck(this,t),this.changeCategory=function(t){var e=$(t.currentTarget);i.$infoDropdownItem.removeClass("header__info-dropdown-item--active"),e.addClass("header__info-dropdown-item--active"),i.toggleDropdown()},this.toggleDropdown=function(){i.$infoDropdown.toggleClass("header__info-dropdown--active")},this.toggleMobileNav=function(){i._$body.toggleClass("menu-open");var t=setTimeout(function(){i._$nav.css("height",i._$body.innerHeight()+"px"),clearTimeout(t)},250)},this._$btn=$(".header__btn"),this._$nav=$(".nav-mobile"),this._$body=$("body"),this._$wrapper=$(".wrapper"),this.$btnInfo=$(".header__info-btn"),this.$infoDropdown=$(".header__info-dropdown"),this.$infoDropdownItem=$(".header__info-dropdown-item"),this._$btn.click(this.toggleMobileNav),this.$infoDropdownItem.click(this.changeCategory),this.$btnInfo.click(this.toggleDropdown)},Matchings=function t(){var e=this;_classCallCheck(this,t),this.resizeInterests=function(){e._$interestsGroup.css("width",e._$interestsContainer.width()+"px");e._$interestsGroup.each(function(t){var e=$(this);e.innerWidth()})},this.handleResize=function(){e.resizeInterests()},this._$window=$(window),this._$slider=$(".matching__slider-list"),this._$slider.slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,autoplay:!1,responsive:[{breakpoint:992,settings:{arrows:!0,appendArrows:$(".matching__slider-controls"),prevArrow:"<div class='matching__slider-arrow matching__slider-arrow--prev'><img src='images/i-chevron.svg' class='matching__slider-arrow-icon'></div>",nextArrow:"<div class='matching__slider-arrow matching__slider-arrow--next'><img src='images/i-chevron.svg' class='matching__slider-arrow-icon'></div>"}}]}),this._$interestsContainer=$(".matching__actions .container"),this._$interestsInner=$(".matching__actions-inner"),this._$interestsTrack=$(".matching__actions-inner-track"),this._$interestsGroup=$(".matching__actions-group").not(".matching__actions-group--incomplete"),this.resizeInterests(),this._$window.resize(this.handleResize)},PopupManager=function t(){var i=this;_classCallCheck(this,t),this.closePopups=function(){i._$backdrop.removeClass("backdrop--active"),i._$popup.removeClass("popup--active")},this.togglePopup=function(t){i._$backdrop.toggleClass("backdrop--active");var e=$(t.currentTarget).attr("data-popup-open");$('[data-popup-target="'+e+'"]').toggleClass("popup--active")},this._$backdrop=$(".backdrop"),this._$popup=$(".popup"),this._$trigger=$("[data-popup-open]"),this._$target=$("[data-popup-target]"),this._$trigger.click(this.togglePopup),this._$backdrop.click(this.closePopups)},Gallery=function t(){var e=this;_classCallCheck(this,t),this.toggleGallery=function(){e.$popup.toggleClass("popup-gallery--active")},this.$btn=$(".matching__profile-gallery-trigger"),this.$close=$(".popup-gallery__btn"),this.$popup=$(".popup-gallery"),this.$slider=$(".popup-gallery__slider"),this.$next=$(".popup-gallery__trigger--next"),this.$prev=$(".popup-gallery__trigger--prev"),this.$current=$(".popup-gallery__current"),this.$total=$(".popup-gallery__total"),this.$close.click(this.toggleGallery),this.$btn.click(this.toggleGallery),this.$slider.slick({slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,autoplay:!1}),this.$next.click(function(){e.$slider.slick("slickNext")}),this.$prev.click(function(){e.$slider.slick("slickPrev")}),this.$total.text(this.$slider.slick("getSlick").slideCount),this.$slider.on("afterChange",function(){e.$current.text(e.$slider.slick("slickCurrentSlide")+1)})};$(document).ready(function(){if(0<$(".nav-mobile").length)new Menu;if(0<$(".matching__slider").length)new Matchings;if(0<$(".popup").length)new PopupManager;if(0<$(".popup-gallery").length)new Gallery;if(0<$(".messages__btn").length&&$(".messages__btn").click(function(t){var e=$(t.currentTarget),i=e.children(),n=i.text();e.toggleClass("btn--border"),i.toggleClass("u-color-gradient"),"INVITE"===n?i.text("INVITED"):i.text("INVITE")}),0<$(".registration__interest").length&&$(".registration__interest").click(function(t){$(t.currentTarget).toggleClass("registration__interest--active")}),0<$("[data-max-words]").length&&$("[data-max-words]").each(function(t){var e=$(this),i=$("[data-label-target="+e.attr("data-label")+"]"),n=e.attr("data-max-words");e.on("input",function(){var t=e.val().split(" ").length;""===e.val()?i.text(n):i.text(n-t)})}),0<$(".registration__photos").length){var e=0,i=$(window),n=$("body"),s=$(".registration");576<=i.width()&&(e=(n.width()-s.width())/2),i.resize(function(){if(576<=i.width()){e=(n.width()-s.width())/2,r.slick("unslick");var t={mobileFirst:!0,slidesToShow:2,slidesToScroll:1,centerMode:!0,centerPadding:"60px",arrows:!1,dots:!1,autoplay:!1,infinite:!1,initialSlide:1,responsive:[{breakpoint:576,settings:{centerPadding:e+"px"}},{breakpoint:768,settings:{slidesToShow:2,centerPadding:"calc("+e+"px - .75rem)"}},{breakpoint:992,settings:{centerPadding:"calc("+e+"px - .75rem)"}},{breakpoint:1200,settings:{centerPadding:"calc("+e+"px - .75rem)"}},{breakpoint:1460,settings:{centerPadding:"calc("+e+"px - .75rem)"}}]};r.slick(t)}});var t={mobileFirst:!0,slidesToShow:2,slidesToScroll:1,centerMode:!0,centerPadding:"60px",arrows:!1,dots:!1,autoplay:!1,infinite:!1,initialSlide:1,responsive:[{breakpoint:576,settings:{centerPadding:e+"px"}},{breakpoint:768,settings:{slidesToShow:2,centerPadding:"calc("+e+"px - .75rem)"}},{breakpoint:992,settings:{centerPadding:"calc("+e+"px - .75rem)"}},{breakpoint:1200,settings:{centerPadding:"calc("+e+"px - .75rem)"}},{breakpoint:1460,settings:{centerPadding:"calc("+e+"px - .75rem)"}}]},r=$(".registration__photos");r.slick(t),$(".registration__photos-item-delete").click(function(t){var e=$(t.currentTarget).parent().index();$(".registration__photos-item").eq(e).fadeOut("fast",function(){r.slick("slickRemove",e)})})}if(0<$(".range").length){var o=document.getElementById("range");noUiSlider.create(o,{start:[21,33],connect:!0,tooltips:!0,format:{to:function(t){return t+""},from:function(t){return t.replace(",-","")}},step:1,range:{min:18,max:50}})}});
//# sourceMappingURL=app-dist.js.map