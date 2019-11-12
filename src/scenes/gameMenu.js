'use strict';
class gameMenu extends Phaser.Scene {
    constructor() {
        super({
            key: 'gameMenu'
        });
    }
    create() {
        this.menu_bg = this.add.tileSprite(this.centerX(), this.centerY(), game.config.width, game.config.height, 'menu_bg');
        this.menu_bg.setScrollFactor(0);
        this.insertLogo = this.add.sprite(this.centerX(), this.centerY() - 100, 'logo');
        this.playButton = this.add.sprite(this.centerX(), this.centerY(), 'buttons_1', 0).setInteractive();
        this.playButton.on('pointerover', function() {
            this.playButton.setFrame(1);
        }, this);
        this.playButton.on('pointerout', function() {
            this.playButton.setFrame(0);
        }, this);
        this.playButton.on('pointerdown', function() {
            this.scene.start('playGame');
        }, this);
    }
    centerX() {
        return this.sys.game.config.width / 2;
    }
    centerY() {
        return this.sys.game.config.height / 2;
    }
};