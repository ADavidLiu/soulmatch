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
    
});