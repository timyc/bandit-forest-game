'use strict';
class playGame extends Phaser.Scene {
    constructor() {
        super({
            key: 'playGame'
        });
    }

    create() {
        this.back = this.add.tileSprite(this.centerX(), this.centerY(), game.config.width * 3, game.config.height, 'back');
        this.back.setScrollFactor(0);
        this.back2 = this.add.tileSprite(this.centerX(), this.centerY() + 50, game.config.width, game.config.height * 2, 'back2');
        this.back2.setScrollFactor(0);
        this.back3 = this.add.tileSprite(this.centerX(), this.centerY() + 50, game.config.width, game.config.height * 2, 'back3');
        this.back3.setScrollFactor(0);
        this.bg_5 = this.add.tileSprite(this.centerX(), this.centerY() + 40, game.config.width, game.config.height * 2, 'bg_5');
        this.bg_5.setScrollFactor(0);
        this.bg_2 = this.add.tileSprite(this.centerX(), this.centerY() + 40, game.config.width, game.config.height * 2, 'bg_4');
        this.bg_2.setScrollFactor(0);
        this.bg_4 = this.add.tileSprite(this.centerX(), this.centerY() + 40, game.config.width, game.config.height * 2, 'bg_4');
        this.bg_4.setScrollFactor(0);
        this.front = this.add.tileSprite(this.centerX(), this.centerY(), game.config.width, game.config.height * 2, 'front');
        this.front.setScrollFactor(0);
        this.front2 = this.add.tileSprite(this.centerX(), this.centerY(), game.config.width, game.config.height * 2, 'front2');
        this.front2.setScrollFactor(0);
        this.bg_1 = this.add.tileSprite(this.centerX(), this.centerY() - 215, game.config.width, game.config.height, 'bg_1');
        this.bg_1.setScrollFactor(0);
        this.bg_3 = this.add.tileSprite(this.centerX(), this.centerY() * -0.75, game.config.width, game.config.height * 3, 'bg_3');
        this.bg_3.setScrollFactor(0);
        this.player = this.physics.add.sprite(30, game.config.height - 70, 'character');
        this.bg_6 = this.add.tileSprite(this.centerX(), this.centerY() * -0.70, game.config.width, game.config.height * 3, 'bg_6');
        this.bg_6.setScrollFactor(0);
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('character', {
                start: 0,
                end: 3
            }),
            frameRate: 6,
            repeat: -1
        });
        this.anims.create({
            key: 'walking',
            frames: this.anims.generateFrameNumbers('character', {
                start: 8,
                end: 15
            }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'crouch',
            frames: this.anims.generateFrameNumbers('character', {
                start: 27,
                end: 30
            }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('character', {
                start: 37,
                end: 37
            }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: 'slash',
            frames: this.anims.generateFrameNumbers('character', {
                start: 17,
                end: 23
            }),
            frameRate: 10,
            repeat: -1
        });
        this.player.setScale(1.5);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.cameras.main.setBounds(0, 0, game.config.width * 3, game.config.height);
        this.cameras.main.startFollow(this.player);
        this.player.angle = 0;
        this.player.setCollideWorldBounds(true);
        this.player.setGravityY(900);
        this.player.scaleX = -1.5;
        this.physics.world.bounds.width = game.config.width * 3;
        this.physics.world.bounds.height = game.config.height - 30;
    }

    update() {
        if (this.cursors.left.isDown && this.player.x > 0) {
            this.player.x -= 1;
            this.player.scaleX = 1.5;
            if (this.cursors.up.isDown || this.player.body.velocity.y > 0) {
                this.player.play('jump', true);
                this.jump();
            } else {
                this.player.play('walking', true);
            }
        } else if (this.cursors.right.isDown && this.player.x < game.config.width * 3) {
            this.player.x += 1;
            this.player.scaleX = -1.5;
            if (this.cursors.up.isDown || this.player.body.velocity.y > 0) {
                this.player.play('jump', true);
                this.jump();
            } else {
                this.player.play('walking', true);
            }
        } else if (this.cursors.down.isDown) {
            this.player.play('crouch', true);
        } else if (this.cursors.up.isDown) {
            this.jump();
            this.player.play('jump', true);
        } else {
            if (this.cursors.space.isDown) {
                this.attacking()
            } else {
                this.player.play('idle', true);
            }
        }
        this.bg_1.tilePositionX = this.cameras.main.scrollX * .6;
        this.front.tilePositionX = this.cameras.main.scrollX * .6;
        this.front2.tilePositionX = this.cameras.main.scrollX * .6;
        this.bg_2.tilePositionX = this.cameras.main.scrollX * .6;
        this.bg_3.tilePositionX = this.cameras.main.scrollX * .6;
        this.bg_4.tilePositionX = this.cameras.main.scrollX * .6;
        this.bg_6.tilePositionX = this.cameras.main.scrollX * .6;
        this.back2.tilePositionX = this.cameras.main.scrollX * .1;
        this.back3.tilePositionX = this.cameras.main.scrollX * .1;
        this.bg_5.tilePositionX = this.cameras.main.scrollX * .2;
        this.back.tilePositionX = this.cameras.main.scrollX;
    }

    jump() {
        if (this.player.body.velocity.y == 0) {
            this.player.setVelocityY(-500);
        }
    }

    attacking() {
        this.player.play('slash', true);
    }

    centerX() {
        return this.sys.game.config.width / 2;
    }

    centerY() {
        return this.sys.game.config.height / 2;
    }
};