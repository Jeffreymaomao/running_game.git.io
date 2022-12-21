function Player(options) {

    this.setPosition(options.x, options.y);
    this.width = options.width;
    this.height = options.height;
    this.velocityX = 0;
    this.velocityY = 0;
    this.jumpSize = -13;
    this.color = '#fff';

}

Player.prototype = new Vector2;

Player.prototype.update = function () {
    this.velocityY += 1;
    this.setPosition(this.x + this.velocityX, this.y + this.velocityY);

    if (this.y > win.height || this.x + this.width < 0) {
        this.x = 150;
        this.y = 50;
        this.velocityX = 0;
        this.velocityY = 0;
        win.jumpCount = 0;
        win.aceleration = 0;
        win.acelerationTweening = 0;
        win.platformManager.maxDistanceBetween = 350;
        win.platformManager.updateWhenLose();
    }

    if ((win.keys.UP || win.keys.SPACE || win.keys.W || win.dragging) && this.velocityY < -8) {
        this.velocityY += -0.75;
    }

};

Player.prototype.draw = function () {
    win.fillStyle = this.color;
    win.fillRect(this.x, this.y, this.width, this.height);
    win.beginPath();
    win.rect(this.x, this.y, this.width, this.height);
    win.stroke();
};
