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
    
    function preload() {
        // Load an image and call it 'logo'.
        game.load.atlasJSONHash('tutorial', 'assets/tutorial.png', 'assets/tutorial.json');
		game.load.audio('twinkle', 'assets/twinkle.wav');
    }
    

    
    function create() {
	
		//background
		game.add.sprite( 0, 0, 'tutorial', 'musicback.jpg');
		
		//audio sprite
		var sound = game.add.audio('twinkle');
		twinkle.allowMultiple = true;
		
		//markers
		
		twinkle.addMarker('m1', 0, 2.3);
		twinkle.addMarker('m1h', 3, 2.3);
		twinkle.addMarker('m1hv', 6, 2.3);
		twinkle.addMarker('m1v', 9, 2.3);
		twinkle.addMarker('m1vi', 12, 2.3);
		twinkle.addMarker('m1vih', 15, 2.3);
		twinkle.addMarker('m1vihv', 18, 2.3);
		twinkle.addMarker('m1viv', 21, 2.3);
		
		twinkle.addMarker('m2', 24, 2.3);
		twinkle.addMarker('m2h', 27, 2.3);
		twinkle.addMarker('m2hv', 30, 2.3);
		twinkle.addMarker('m2v', 33, 2.3);
		twinkle.addMarker('m2vi', 36, 2.3);
		twinkle.addMarker('m2vih', 39, 2.3);
		twinkle.addMarker('m2vihv', 42, 2.3);
		twinkle.addMarker('m2viv', 45, 2.3);
		
		twinkle.addMarker('m3', 48, 2.3);
		twinkle.addMarker('m3h', 51, 2.3);
		twinkle.addMarker('m3hv', 54, 2.3);
		twinkle.addMarker('m3v', 57, 2.3);
		twinkle.addMarker('m3vih', 60, 2.3);
		twinkle.addMarker('m3vihv', 63, 2.3);
		twinkle.addMarker('m3viv', 66, 2.3);
		
		twinkle.addMarker('m4', 69, 2.3);
		
		//buttons!
		var replayButton = game.add.button(18, 20 , 'tutorial', test, this, 'playbutton2.png', 'playbutton2.png', 'playpressed.png', 'playbutton2.png');
		var playButton = game.add.button(890, 20 , 'tutorial', test, this, 'playbutton1.png', 'playbutton1.png', 'playpressed1.png', 'playbutton1.png');
		var checkButton = game.add.button(game.world.centerX, 520 , 'tutorial', test, this, 'check.png', 'check.png', 'checkpressed.png', 'check.png');
		var pianoButton = game.add.button(890, 180 , 'tutorial', test, this, 'piano.png', 'piano.png', 'piano.png', 'piano.png');
		var violinButton = game.add.button(890, 300 , 'tutorial', test, this, 'violin.png', 'violin.png', 'violin.png', 'violin.png');
		
		
		replayButton.onInputUp.add('playbutton2.png', this);
		//puzzle pieces
		var m1 = game.add.sprite( 50, 450, 'tutorial', 'T1.png');
		var m2 = game.add.sprite( 200, 450, 'tutorial', 'T2.png');
		var m3 = game.add.sprite( 350, 450, 'tutorial', 'T3.png');
		var m4 = game.add.sprite( 500, 450, 'tutorial', 'T4.png');
		var m5 = game.add.sprite( 650, 450, 'tutorial', 'T5.png');
		var m6 = game.add.sprite( 820, 450, 'tutorial', 'T6.png');
		
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
        var text = game.add.text( game.world.centerX, 15, "Music Puzzle", style );
        text.anchor.setTo( 0.5, 0.0 );
    }
    
    function update() {
       
    }
	
	function test()
	{
		twinkle.play('m1vi');
	}
};
