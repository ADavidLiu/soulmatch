"use strict";function _classCallCheck(i,s){if(!(i instanceof s))throw new TypeError("Cannot call a class as a function")}var Menu=function i(){var s=this;_classCallCheck(this,i),this.toggleMobileNav=function(){s._$body.toggleClass("menu-open")},this._$btn=$(".header__btn"),this._$body=$("body"),this._$btn.click(this.toggleMobileNav)},Matchings=function i(){_classCallCheck(this,i),this._$slider=$(".matching__slider"),this._$slider.slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,autoplay:!1,responsive:[{breakpoint:992,settings:{arrows:!0,appendArrows:$(".matching__slider-controls"),prevArrow:"<div class='matching__slider-arrow matching__slider-arrow--prev'><img src='images/i-chevron.svg' class='matching__slider-arrow-icon'></div>",nextArrow:"<div class='matching__slider-arrow matching__slider-arrow--next'><img src='images/i-chevron.svg' class='matching__slider-arrow-icon'></div>"}}]})};$(document).ready(function(){if(0<$(".nav-mobile").length)new Menu;if(0<$(".matching__slider").length)new Matchings});
//# sourceMappingURL=app-dist.js.map