window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
	
    var game = new Phaser.Game( 1024, 640, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
	
	var replayButton;
	var playButton;
	var checkButton;
	var pianoButton;
	var violinButton;
	var sound;
    
    function preload() {
        // Load an image and call it 'logo'.
        game.load.atlasJSONHash('tutorial', 'assets/tutorial.png', 'assets/tutorial.json');
		game.load.audio('sound', 'assets/Twinkle.wav');
    }
    

    
    function create() {
	
		//background
		game.add.sprite( 0, 0, 'tutorial', 'musicback.jpg');
		
		//audio sprite
		sound = game.add.audio('sound');
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
		sound.addMarker('m4h', 72, 2.3);
		sound.addMarker('m4hv', 75, 2.3);
		sound.addMarker('m4v', 78, 2.3);
		sound.addMarker('m4vih', 81, 2.3);
		sound.addMarker('m4vihv', 84, 2.3);
		sound.addMarker('m4viv', 87, 2.3);
		
		sound.addMarker('m5', 90, 2.3);
		sound.addMarker('m5h', 93, 2.3);
		sound.addMarker('m5hv', 96, 2.3);
		sound.addMarker('m5v', 99, 2.3);
		sound.addMarker('m5vih', 102, 2.3);
		sound.addMarker('m5vihv', 105, 2.3);
		sound.addMarker('m5viv', 108, 2.3);
		
		sound.addMarker('m6', 111, 2.3);
		sound.addMarker('m6h', 114, 2.3);
		sound.addMarker('m6hv', 117, 2.3);
		sound.addMarker('m6v', 120, 2.3);
		sound.addMarker('m6vih', 123, 2.3);
		sound.addMarker('m6vihv', 126, 2.3);
		sound.addMarker('m6viv', 129, 2.3);
		
		sound.addMarker('Tfinalp', 132, 18.5);
		sound.addMarker('Tfinalp', 151, 18.5);
		
		
		//buttons!
		replayButton = game.add.button( 18, 20 , 'tutorial', test, this, 'playbutton2.png', 'playbutton2.png', 'playpressed.png', 'playbutton2.png');
		playButton = game.add.button( 890, 20 , 'tutorial', test, this, 'playbutton1.png', 'playbutton1.png', 'playpressed1.png', 'playbutton1.png');
		checkButton = game.add.button( game.world.centerX, 520 , 'tutorial', test, this, 'check.png', 'check.png', 'checkpressed.png', 'check.png');
		pianoButton = game.add.button( 890, 180 , 'tutorial', test, this, 'piano.png', 'piano.png', 'piano.png', 'piano.png');
		violinButton = game.add.button( 890, 300 , 'tutorial', test, this, 'violin.png', 'violin.png', 'violin.png', 'violin.png');
		
		
		var measure;
		for(var i = 0; i < 6; i++)
		{
			measure = game.add.sprite( 50 + 150*i, 450, 'tutorial', 'T'+ i+1 +'.png')
			console.log(measure.key);
			measure.inputEnabled = true;
			measure.input.enableDrag();
			measure.isFlipped = false;
			measure.isInverted = false;
			measure.events.onInputOver.add(manipulate, measure);
		}

        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = game.add.text( game.world.centerX, 15, "Music Puzzle", style );
        text.anchor.setTo( 0.5, 0.0 );
    }
    
    function update() {
       
    }
	
	function test()
	{
		playButton.isVisible =! playButton.isVisible;
		sound.play('m1');
	}
	
	function manipulate(){
	
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)|| game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
		{
			this.isFlipped = !this.isFlipped;
			
		}
		
		if(game.input.keyboard.isDown(Phaser.Keyboard.UP)|| game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
		{
			this.isInverted = !this.isInverted;
			
		}
	
	}
};
