class SwipesCount {
    constructor() {
        this.$container = $(".header__swipes");
        this.count = $(".header__swipes span").text();
        this.checkCount(this.count);
    }

    checkCount = count => {
        if (count >= 50) {
            this.$container.removeClass("header__swipes--medium header__swipes--low");
        } else if (count >= 25 && count < 50) {
            this.$container.removeClass("header__swipes--low").addClass("header__swipes--medium");
        } else if (count < 25) {
            this.$container.removeClass("header__swipes--medium").addClass("header__swipes--low");
        }
    }
}