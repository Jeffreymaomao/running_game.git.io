/*******************PARTICLE SYSTEM*************/

function Particle(options) {
    this.x = options.x;
    this.y = options.y;
    this.size = 10;
    this.scatter_x = 10;
    this.scatter_y = 10;
    this.velocityX = options.velocityX || random(-(win.aceleration * 3) - this.scatter_x, -(win.aceleration * 3));
    this.velocityY = options.velocityY || random(-(win.aceleration * 3) - this.scatter_y, -(win.aceleration * 3));
    this.color = options.color;
}

Particle.prototype.update = function () {
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.size *= 0.8;
};

Particle.prototype.draw = function () {
    win.fillStyle = this.color;
    win.fillRect(this.x, this.y, this.size, this.size);
};