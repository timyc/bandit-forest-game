let sceneConfig = {
    preload: preload,
    create: create,
    pack: {
        files: [{
            type: 'image',
            key: 'company',
            url: 'src/assets/company_logo.png'
        }]
    }
}

let config = {
    type: Phaser.AUTO,
    scene: [sceneConfig, gameMenu, loader, playGame],
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'game',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 960,
        height: 550
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 100
            },
            debug: false
        }
    }
};
function preload() {
    this.load.image('company', 'src/assets/company_logo.png');
}
function create() {
    this.scene.start('loader');
}
// Initializes game on window load
window.onload = function() {
    game = new Phaser.Game(config);
}