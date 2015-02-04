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
       
		
		game.load.atlasJSONHash( 'tutorial', 'assets/tutorial.png', 'assets/tutorial.json');
		

    }
    
 
    
    function create() {
	
		//background
		game.add.sprite( 0, 0, 'tutorial', 'musicback');
		
		
		game.add.sprite( game.world.centerX, game.world.centerY, 'T1' );
        
        
    }
    
    function update() 
	{
    
    }
};
