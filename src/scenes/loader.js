'use strict';
class loader extends Phaser.Scene {
    constructor() {
        super({
            key: 'loader'
        });
    }

    preload() {
        this.createProgressbar(this.centerX(), this.centerY());
        this.load.spritesheet('character', 'src/assets/char_sprite.png', {
            frameWidth: 48,
            frameHeight: 48
        });
        this.load.spritesheet('mon1', 'src/assets/mon1.png', {
            frameWidth: 55,
            frameHeight: 55
        });
        this.load.spritesheet('buttons_1', 'src/assets/buttons_1.png', {
            frameWidth: 256,
            frameHeight: 64
        });
        this.load.image('menu_bg', 'src/assets/menu_bg.png');
        this.load.image('logo', 'src/assets/untitled_logo.png');
        this.load.image('bg_2', 'src/assets/Layer_0005_5.png');
        this.load.image('bg_1', 'src/assets/Layer_0002_7.png');
        this.load.image('bg_3', 'src/assets/Layer_0001_8.png');
        this.load.image('bg_4', 'src/assets/Layer_0003_6.png');
        this.load.image('bg_5', 'src/assets/Layer_0006_4.png');
        this.load.image('bg_6', 'src/assets/Layer_0000_9.png');
        this.load.image('back', 'src/assets/Layer_0010_1.png');
        this.load.image('back2', 'src/assets/Layer_0009_2.png');
        this.load.image('back3', 'src/assets/Layer_0008_3.png');
        this.load.image('front', 'src/assets/Layer_0004_Lights.png');
        this.load.image('front2', 'src/assets/Layer_0007_Lights.png');
    }

    createProgressbar(x, y) {
        var logo = this.add.sprite(this.centerX(), this.centerY() - 100, 'company');
        this.cameras.main.backgroundColor.setTo(210, 180, 140);
        let width = 400;
        let height = 20;
        let xStart = x - width / 2;
        let yStart = y - height / 2;
        let borderOffset = 2;
        let borderRect = new Phaser.Geom.Rectangle(
            xStart - borderOffset,
            yStart - borderOffset,
            width + borderOffset * 2,
            height + borderOffset * 2);
        let border = this.add.graphics({
            lineStyle: {
                width: 5,
                color: 0xaaaaaa
            }
        });
        border.strokeRectShape(borderRect);
        let progressbar = this.add.graphics();
        let updateProgressbar = function(percentage) {
            progressbar.clear();
            progressbar.fillStyle(0xffffff, 1);
            progressbar.fillRect(xStart, yStart, percentage * width, height);
        };
        this.load.on('progress', updateProgressbar);
        this.load.once('complete', function() {
            this.load.off('progress', updateProgressbar);
        }, this);
    }
    create() {
        this.scene.start('gameMenu');
    }
    centerX() {
        return this.sys.game.config.width / 2;
    }

    centerY() {
        return this.sys.game.config.height / 2;
    }
};