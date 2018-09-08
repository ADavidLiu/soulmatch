"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var Menu=function t(){var i=this;_classCallCheck(this,t),this.toggleMobileNav=function(){i._$body.toggleClass("menu-open")},this._$btn=$(".header__btn"),this._$body=$("body"),this._$btn.click(this.toggleMobileNav)},Matchings=function t(){var i=this;_classCallCheck(this,t),this.resizeInterests=function(){i._$interestsGroup.css("width",i._$interestsContainer.width()+"px");i._$interestsGroup.each(function(t){var i=$(this);i.innerWidth()})},this.handleResize=function(){i.resizeInterests()},this._$window=$(window),this._$slider=$(".matching__slider"),this._$slider.slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,autoplay:!1,responsive:[{breakpoint:992,settings:{arrows:!0,appendArrows:$(".matching__slider-controls"),prevArrow:"<div class='matching__slider-arrow matching__slider-arrow--prev'><img src='images/i-chevron.svg' class='matching__slider-arrow-icon'></div>",nextArrow:"<div class='matching__slider-arrow matching__slider-arrow--next'><img src='images/i-chevron.svg' class='matching__slider-arrow-icon'></div>"}}]}),this._$interestsContainer=$(".matching__actions .container"),this._$interestsInner=$(".matching__actions-inner"),this._$interestsTrack=$(".matching__actions-inner-track"),this._$interestsGroup=$(".matching__actions-group").not(".matching__actions-group--incomplete"),this.resizeInterests(),this._$window.resize(this.handleResize)},PopupManager=function t(){var s=this;_classCallCheck(this,t),this.closePopups=function(){s._$backdrop.removeClass("backdrop--active"),s._$popup.removeClass("popup--active")},this.togglePopup=function(t){s._$backdrop.toggleClass("backdrop--active");var i=$(t.currentTarget).attr("data-popup-open");$('[data-popup-target="'+i+'"]').toggleClass("popup--active")},this._$backdrop=$(".backdrop"),this._$popup=$(".popup"),this._$trigger=$("[data-popup-open]"),this._$target=$("[data-popup-target]"),this._$trigger.click(this.togglePopup),this._$backdrop.click(this.closePopups)};$(document).ready(function(){if(0<$(".nav-mobile").length)new Menu;if(0<$(".matching__slider").length)new Matchings;if(0<$(".popup").length)new PopupManager});
//# sourceMappingURL=app-dist.js.map