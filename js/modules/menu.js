class Menu {
    constructor() {
        this._$btn = $(".header__btn");
        this._$body = $("body");

        this._$btn.click(this.toggleMobileNav);
    }

    toggleMobileNav = () => {
        this._$body.toggleClass("menu-open");
    }
}