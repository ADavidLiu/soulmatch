class Menu {
    constructor() {
        this._$btn = $(".header__btn");
        this._$nav = $(".nav-mobile");
        this._$body = $("body");
        this._$wrapper = $(".wrapper");

        this._$btn.click(this.toggleMobileNav);
    }

    toggleMobileNav = () => {
        this._$body.toggleClass("menu-open");
        const timeout = setTimeout(() => {
            this._$nav.css("height", this._$body.innerHeight() + "px");
            clearTimeout(timeout);
        }, 250);
    }
}