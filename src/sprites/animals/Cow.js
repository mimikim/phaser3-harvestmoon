/**
 * Creates Cow, extension of the Sprite Game Object class
 * https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html
 */

export default class Cow extends Phaser.GameObjects.Sprite {
  constructor( config ) {
    super(config.scene, config.x, config.y, config.key, config.frame);

    this.scene = config.scene;
    this.init();
  }

  init() {
    // adding sprite to scene
    this.scene.add.existing( this );

    // adding physics, this sprite is a dynamic body
    this.scene.physics.add.existing( this );

    // adding collision between this Sprite and the Player
    this.scene.physics.add.collider( this, this.scene.player );

    // set immovable if another object collides with this Sprite
    // otherwise, Sprite will move if the Player runs into it
    this.body.setImmovable( true );

    // fix origin
    this.setOrigin( 0, 1 );

    // sets animations
    this.setAnimations();
  }

  setAnimations() {
    // cow eating (front)
    if ( ! this.scene.anims.get( 'cow-eating-front' ) ) {
      this.scene.anims.create({
        key: 'cow-eating-front',
        frames: this.scene.anims.generateFrameNames( 'cow-eating-front', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

    // cow eating (side)
    if ( ! this.scene.anims.get( 'cow-eating-side' ) ) {
      this.scene.anims.create({
        key: 'cow-eating-side',
        frames: this.scene.anims.generateFrameNames( 'cow-eating-side', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

    // cow happy (side)
    if ( ! this.scene.anims.get( 'cow-happy-side' ) ) {
      this.scene.anims.create({
        key: 'cow-happy-side',
        frames: this.scene.anims.generateFrameNames( 'cow-happy-side', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

    // cow shocked (side)
    if ( ! this.scene.anims.get( 'cow-shocked' ) ) {
      this.scene.anims.create({
        key: 'cow-shocked',
        frames: this.scene.anims.generateFrameNames( 'cow-shocked', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

    // cow sleeping (front)
    if ( ! this.scene.anims.get( 'cow-sleeping-front' ) ) {
      this.scene.anims.create({
        key: 'cow-sleeping-front',
        frames: this.scene.anims.generateFrameNames( 'cow-sleeping-front', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }

    // cow sleeping (side)
    if ( ! this.scene.anims.get( 'cow-sleeping-side' ) ) {
      this.scene.anims.create({
        key: 'cow-sleeping-side',
        frames: this.scene.anims.generateFrameNames( 'cow-sleeping-side', {
          frames: [0, 1]
        }),
        frameRate: 6,
        yoyo: true,
        repeat: -1
      });
    }
  }


}
