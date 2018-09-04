//@prepros-prepend "modules/menu.js";
//@prepros-prepend "modules/matchings.js";

$(document).ready(function () {
    
    if ($(".nav-mobile").length > 0) {
        const menu = new Menu();
    }

    if ($(".matching__slider").length > 0) {
        const matchings = new Matchings();
    }
    
});