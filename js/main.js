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
    }
    

    
    function create() {
	
		//background
		game.add.sprite( 0, 0, 'tutorial', 'musicback.jpg');
		var replayButton = game.add.button(18, 20 , 'tutorial', test, this, 'playbutton2.png', 'playbutton2.png', 'playpressed.png', 'playbutton2.png');
		var playButton = game.add.button(890, 20 , 'tutorial', test, this, 'playbutton1.png', 'playbutton1.png', 'playpressed1.png', 'playbutton1.png');
		var checkButton = game.add.button(game.world.centerX, 620 , 'tutorial', test, this, 'check.png', 'check.png', 'checkpressed.png', 'check.png');
		var pianoButton = game.add.button(890, 180 , 'tutorial', test, this, 'piano.png', 'piano.png', 'piano.png', 'piano.png');
		var violinButton = game.add.button(890, 300 , 'tutorial', test, this, 'violin.png', 'violin.png', 'violin.png', 'violin.png');
		
		

        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = game.add.text( game.world.centerX, 15, "Build something awesome.", style );
        text.anchor.setTo( 0.5, 0.0 );
    }
    
    function update() {
       
    }
	
	function test()
	{
		playbuttonvisible =!  playbutton.visible;
	}
};
