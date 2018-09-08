class PopupManager {
    constructor() {
        this._$backdrop = $(".backdrop");
        this._$popup = $(".popup");

        this._$trigger = $("[data-popup-open]");
        this._$target = $("[data-popup-target]");

        this._$trigger.click(this.togglePopup);
        this._$backdrop.click(this.closePopups);
    }

    closePopups = () => {
        this._$backdrop.removeClass("backdrop--active");
        this._$popup.removeClass("popup--active");
    }

    togglePopup = e => {
        this._$backdrop.toggleClass("backdrop--active");
        const $this = $(e.currentTarget);
        const target = $this.attr("data-popup-open");
        const $target = $(`[data-popup-target="${target}"]`);
        $target.toggleClass("popup--active");
    }
}