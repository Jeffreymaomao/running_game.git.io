/*
This function is to produce vector in 2 dimension
*/
function Vector2(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.previousX = 0;
    this.previousY = 0;
};

Vector2.prototype.setPosition = function (x, y) {
    this.previousX = this.x;
    this.previousY = this.y;
    this.x = x;
    this.y = y;
};

Vector2.prototype.setX = function (x) {
    this.previousX = this.x;
    this.x = x;
};

Vector2.prototype.setY = function (y) {
    this.previousY = this.y;
    this.y = y;
};


Vector2.prototype.insercects = function (obj) {
    if (obj.x < this.x + this.width && obj.y < this.y + this.height &&
        obj.x + obj.width > this.x && obj.y + obj.height > this.y) {
        return true;
    }
    return false;
};

Vector2.prototype.insercectsLeft = function (obj) {
    if (obj.x < this.x + this.width && obj.y < this.y + this.height) {
        return true;
    }
    return false;
};
