function Platform(options) {
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.previousX = 0;
    this.previousY = 0;
    this.color = options.color;
}

Platform.prototype = new Vector2;

Platform.prototype.draw = function () {
    win.fillStyle = this.color;
    win.fillRect(this.x, this.y, this.width, this.height);
};

/*******************PLATFORM MANAGER*************/
/* This is to produce a obeject of platform*/
function PlatformManager() {
    this.maxDistanceBetween = 300;
//    this.colors = ["hsl(190, 63%, 47%)", '#98cb4a', '#f76d3c', '#f15f74', '#5481e6'];
    this.colors = ["#dde8b9","#e8d2ae","#d7b29d","#cb8589","#796465"];
    /*
    cyan:   #2ca8c2, hsl(190, 63%, 47%)
    green:  #98cb4a, hsl(84, 55%, 54%)
    orange: #f76d3c, hsl(16, 92%, 60%)
    red:    #f15f74, hsl(351, 84%, 66%)
    blue:   #5481e6, hsl(222, 74%, 62%)
    */
    this.first = new Platform({
        x: 100,
        y: win.width / 2,
        width: 400,
        height: 70
    })
    this.second = new Platform({
        x: (this.first.x + this.first.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween),
        y: random(this.first.y - 128, win.height - 80),
        width: 400,
        height: 70
    })
    this.third = new Platform({
        x: (this.second.x + this.second.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween),
        y: random(this.second.y - 128, win.height - 80),
        width: 400,
        height: 70
    })

    this.first.height = this.first.y + win.height;
    this.second.height = this.second.y + win.height;
    this.third.height = this.third.y + win.height;
    this.first.color = randomChoice(this.colors);
    this.second.color = randomChoice(this.colors);
    this.third.color = randomChoice(this.colors);

    this.colliding = false;

    this.platforms = [this.first, this.second, this.third];
}

PlatformManager.prototype.update = function () {

    this.first.x -= 3 + win.aceleration;
    if (this.first.x + this.first.width < 0) {
        this.first.width = random(450, win.width + 200);
        this.first.x = (this.third.x + this.third.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween);
        this.first.y = random(this.third.y - 32, win.height - 80);
        this.first.height = this.first.y + win.height + 10;
        this.first.color = randomChoice(this.colors);
    }

    this.second.x -= 3 + win.aceleration;
    if (this.second.x + this.second.width < 0) {
        this.second.width = random(450, win.width + 200);
        this.second.x = (this.first.x + this.first.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween);
        this.second.y = random(this.first.y - 32, win.height - 80);
        this.second.height = this.second.y + win.height + 10;
        this.second.color = randomChoice(this.colors);
    }

    this.third.x -= 3 + win.aceleration;
    if (this.third.x + this.third.width < 0) {
        this.third.width = random(450, win.width + 200);
        this.third.x = (this.second.x + this.second.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween);
        this.third.y = random(this.second.y - 32, win.height - 80);
        this.third.height = this.third.y + win.height + 10;
        this.third.color = randomChoice(this.colors);
    }

};

PlatformManager.prototype.updateWhenLose = function () {

    this.first.x = 300;
    this.first.color = randomChoice(this.colors);
    this.first.y = win.width / random(2, 3);
    this.second.x = (this.first.x + this.first.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween);
    this.third.x = (this.second.x + this.second.width) + random(this.maxDistanceBetween - 150, this.maxDistanceBetween);

};