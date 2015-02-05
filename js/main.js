BasicGame.Game = function (game) {

	 //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

    create: function () {
	
		//background
		this.add.sprite( 0, 0, 'tutorial', 'musicback.jpg');
		
		//audio sprite
		var sound = this.add.audio('sound');
		sound.allowMultiple = true;
		
		//markers
		
		sound.addMarker('m1', 0, 2.3);
		sound.addMarker('m1h', 3, 2.3);
		sound.addMarker('m1hv', 6, 2.3);
		sound.addMarker('m1v', 9, 2.3);
		sound.addMarker('m1vi', 12, 2.3);
		sound.addMarker('m1vih', 15, 2.3);
		sound.addMarker('m1vihv', 18, 2.3);
		sound.addMarker('m1viv', 21, 2.3);
		
		sound.addMarker('m2', 24, 2.3);
		sound.addMarker('m2h', 27, 2.3);
		sound.addMarker('m2hv', 30, 2.3);
		sound.addMarker('m2v', 33, 2.3);
		sound.addMarker('m2vi', 36, 2.3);
		sound.addMarker('m2vih', 39, 2.3);
		sound.addMarker('m2vihv', 42, 2.3);
		sound.addMarker('m2viv', 45, 2.3);
		
		sound.addMarker('m3', 48, 2.3);
		sound.addMarker('m3h', 51, 2.3);
		sound.addMarker('m3hv', 54, 2.3);
		sound.addMarker('m3v', 57, 2.3);
		sound.addMarker('m3vih', 60, 2.3);
		sound.addMarker('m3vihv', 63, 2.3);
		sound.addMarker('m3viv', 66, 2.3);
		
		sound.addMarker('m4', 69, 2.3);
		
		//buttons!
		var replayButton = this.add.button( 18, 20 , 'tutorial', test, this, 'playbutton2.png', 'playbutton2.png', 'playpressed.png', 'playbutton2.png');
		var playButton = this.add.button( 890, 20 , 'tutorial', test, this, 'playbutton1.png', 'playbutton1.png', 'playpressed1.png', 'playbutton1.png');
		var checkButton = this.add.button( this.world.centerX, 520 , 'tutorial', test, this, 'check.png', 'check.png', 'checkpressed.png', 'check.png');
		var pianoButton = this.add.button( 890, 180 , 'tutorial', test, this, 'piano.png', 'piano.png', 'piano.png', 'piano.png');
		var violinButton = this.add.button( 890, 300 , 'tutorial', test, this, 'violin.png', 'violin.png', 'violin.png', 'violin.png');
		
		
		replayButton.onInputUp.add('playbutton2.png', this);
		//puzzle pieces
		var m1 = this.add.sprite( 50, 450, 'tutorial', 'T1.png');
		var m2 = this.add.sprite( 200, 450, 'tutorial', 'T2.png');
		var m3 = this.add.sprite( 350, 450, 'tutorial', 'T3.png');
		var m4 = this.add.sprite( 500, 450, 'tutorial', 'T4.png');
		var m5 = this.add.sprite( 650, 450, 'tutorial', 'T5.png');
		var m6 = this.add.sprite( 820, 450, 'tutorial', 'T6.png');
		
		//behaviors
		m1.inputEnabled = true;
		m2.inputEnabled = true;
		m3.inputEnabled = true;
		m4.inputEnabled = true;
		m5.inputEnabled = true;
		m6.inputEnabled = true;
		
		m1.input.enableDrag();
		m2.input.enableDrag();
		m3.input.enableDrag();
		m4.input.enableDrag();
		m5.input.enableDrag();
		m6.input.enableDrag();
		
		

        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = this.add.text( this.world.centerX, 15, "Music Puzzle", style );
        text.anchor.setTo( 0.5, 0.0 );
    },
    
    update: function () {
	
	var i;
	i++;
       
    },
	
	function test(){
		playButton.isVisible =! playButton.isVisible;
	}
};