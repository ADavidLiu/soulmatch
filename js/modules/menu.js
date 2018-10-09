class Menu {
    constructor() {
        this._$btn = $(".header__btn");
        this._$nav = $(".nav-mobile");
        this._$body = $("body");
        this._$wrapper = $(".wrapper");
        this.$btnInfo = $(".header__info-btn");
        this.$infoDropdown = $(".header__info-dropdown");
        this.$infoDropdownItem = $(".header__info-dropdown-item");

        this._$btn.click(this.toggleMobileNav);
        this.$infoDropdownItem.click(this.changeCategory);
        this.$btnInfo.click(this.toggleDropdown);
    }

    changeCategory = e => {
        const $this = $(e.currentTarget);
        this.$infoDropdownItem.removeClass("header__info-dropdown-item--active");
        $this.addClass("header__info-dropdown-item--active");
        this.toggleDropdown();
    }

    toggleDropdown = () => {
        this.$infoDropdown.toggleClass("header__info-dropdown--active");
    }

    toggleMobileNav = () => {
        this._$body.toggleClass("menu-open");
        const timeout = setTimeout(() => {
            this._$nav.css("height", this._$body.innerHeight() + "px");
            clearTimeout(timeout);
        }, 250);
    }
}