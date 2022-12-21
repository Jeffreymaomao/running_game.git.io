var i = 0;


/************************************************/

win.setup = function () {

    this.jumpCount = 0;
    this.aceleration = 0;
    this.acelerationTweening = 0;

    this.player = new Player({
        x: 150,
        y: 30,
        width: 32,
        height: 32
    });

    this.platformManager = new PlatformManager();

    this.particles = [];
    this.particlesIndex = 0;
    this.particlesMax = 20;
    this.collidedPlatform = null;
    this.jumpCountRecord = 0;

};

win.update = function () {

    this.player.update();

    this.aceleration += (this.acelerationTweening - this.aceleration) * 0.01;

    for (i = 0; i < this.platformManager.platforms.length; i++) {
        if (this.player.insercects(this.platformManager.platforms[i])) {
            this.collidedPlatform = this.platformManager.platforms[i];
            if (this.player.y < this.platformManager.platforms[i].y) {
                this.player.y = this.platformManager.platforms[i].y;
                this.player.velocityY = 0;
            }

            this.player.x = this.player.previousX;
            this.player.y = this.player.previousY;

            this.particles[(this.particlesIndex++) % this.particlesMax] = new Particle({
                x: this.player.x,
                y: this.player.y + this.player.height,
                color: this.collidedPlatform.color
            });

            if (this.player.insercectsLeft(this.platformManager.platforms[i])) {
                this.player.x = this.collidedPlatform.x - 64;
                for (i = 0; i < 10; i++) {
                    this.particles[(this.particlesIndex++) % this.particlesMax] = new Particle({
                        x: this.player.x + this.player.width,
                        y: random(this.player.y, this.player.y + this.player.height),
                        velocityY: random(-30, 30),
                        color: randomChoice(['#181818', '#181818', this.collidedPlatform.color])
                    });
                };
                this.player.velocityY = -10 + -(this.aceleration * 4);
                this.player.velocityX = -20 + -(this.aceleration * 4);


            } else {

                if (this.dragging || this.keys.SPACE || this.keys.UP || this.keys.W) {
                    this.player.velocityY = this.player.jumpSize;
                    this.jumpCount++;
                    if (this.jumpCount > this.jumpCountRecord) {
                        this.jumpCountRecord = this.jumpCount;
                    }
                }

            }

        }
    };

    for (i = 0; i < this.platformManager.platforms.length; i++) {
        this.platformManager.update();
    };

    for (i = 0; i < this.particles.length; i++) {
        this.particles[i].update();
    };

};

win.draw = function () {
    this.player.draw();

    for (i = 0; i < this.platformManager.platforms.length; i++) {
        this.platformManager.platforms[i].draw();
    };

    for (i = 0; i < this.particles.length; i++) {
        this.particles[i].draw();
    };
    record.textContent = this.jumpCountRecord;
    score.textContent = this.jumpCount;

};

win.resize = function () {

};
