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
	
	var song;
	var replayButton;
	var playButton;
	var checkButton;
	var pianoButton;
	var violinButton;
	var sound;
	var twinkle;
	var piano;
	var cur;
	var measure;
	var vertical;
	var vertical1;
	var horizontal;
	var horizontal1;
	
    
    function preload() {
        // Load an image and call it 'logo'.
        game.load.atlasJSONHash('tutorial', 'assets/tutorial.png', 'assets/tutorial.json');
		game.load.audio('sound', 'assets/Twinkle.wav');
		game.load.audio('twinkle', 'assets/TwinkleReal.ogg');
    }
    

    
    function create() {
	
		//all playbacks are default piano
		piano = true;

		//need a group for player's answer to puzzle.
		song = this.add.group();
		
		//background
		game.add.sprite( 0, 0, 'tutorial', 'musicback.jpg');
		
		//audio sprite
		sound = game.add.audio('sound');
		sound.allowMultiple = true;
		
		//markers
		
		sound.addMarker('T1', 0, 2.3);
		sound.addMarker('T1h', 3, 2.3);
		sound.addMarker('T1hv', 6, 2.3);
		sound.addMarker('T1v', 9, 2.3);
		sound.addMarker('T1vi', 12, 2.3);
		sound.addMarker('T1vih', 15, 2.3);
		sound.addMarker('T1vihv', 18, 2.3);
		sound.addMarker('T1viv', 21, 2.3);
		
		sound.addMarker('T2', 24, 2.3);
		sound.addMarker('T2h', 27, 2.3);
		sound.addMarker('T2hv', 30, 2.3);
		sound.addMarker('T2v', 33, 2.3);
		sound.addMarker('T2vi', 36, 2.3);
		sound.addMarker('T2vih', 39, 2.3);
		sound.addMarker('T2vihv', 42, 2.3);
		sound.addMarker('T2viv', 45, 2.3);
		
		sound.addMarker('T3', 48, 2.3);
		sound.addMarker('T3h', 51, 2.3);
		sound.addMarker('T3hv', 54, 2.3);
		sound.addMarker('T3v', 57, 2.3);
		sound.addMarker('T3vi', 60, 2.3);
		sound.addMarker('T3vih', 63, 2.3);
		sound.addMarker('T3vihv', 66, 2.3);
		sound.addMarker('T3viv', 69, 2.3);
		
		sound.addMarker('T4', 72, 2.3);
		sound.addMarker('T4h', 75, 2.3);
		sound.addMarker('T4hv', 78, 2.3);
		sound.addMarker('T4v', 81, 2.3);
		sound.addMarker('T4vi', 84, 2.3);
		sound.addMarker('T4vih', 87, 2.3);
		sound.addMarker('T4vihv', 90, 2.3);
		sound.addMarker('T4viv', 93, 2.3);
		
		sound.addMarker('T5', 96, 2.3);
		sound.addMarker('T5h', 99, 2.3);
		sound.addMarker('T5hv', 102, 2.3);
		sound.addMarker('T5v', 105, 2.3);
		sound.addMarker('T5vi', 108, 2.3);
		sound.addMarker('T5vih', 112, 2.3);
		sound.addMarker('T5vihv', 115, 2.3);
		sound.addMarker('T5viv', 118, 2.3);
		
		sound.addMarker('T6', 120, 2.3);
		sound.addMarker('T6h', 123, 2.3);
		sound.addMarker('T6hv', 126, 2.3);
		sound.addMarker('T6v', 129, 2.3);
		sound.addMarker('T6vi', 132, 2.3);
		sound.addMarker('T6vih', 135, 2.3);
		sound.addMarker('T6vihv', 138, 2.3);
		sound.addMarker('T6viv', 141, 2.3);
		
		sound.addMarker('Tfinalp', 144, 24.7);
		sound.addMarker('Tfinalv', 169, 24.7);
		
		twinkle = game.add.audio('twinkle')
		
		
		//buttons!
		replayButton = game.add.button( 18, 20 , 'tutorial', playAgain, this, 'playbutton2.png', 'playbutton2.png', 'playpressed.png', 'playbutton2.png');
		playButton = game.add.button( 890, 20 , 'tutorial', test, playButton, 'playbutton1.png', 'playbutton1.png', 'playpressed1.png', 'playbutton1.png');
		checkButton = game.add.button( game.world.centerX, 520 , 'tutorial', check, this, 'check.png', 'check.png', 'checkpressed.png', 'check.png');
		pianoButton = game.add.button( 890, 180 , 'tutorial', pPiano, this, 'piano.png', 'piano.png', 'piano.png', 'piano.png');
		violinButton = game.add.button( 890, 300 , 'tutorial', pViolin, this, 'violin.png', 'violin.png', 'violin.png', 'violin.png');
		
		
		
		for(var i = 0; i < 6; i++)
		{
			measure = game.add.sprite( 50 + 150*i, 450, 'tutorial', 'T'+ (i+1).toString() +'.png')
			console.log(measure.frame);
			measure.inputEnabled = true;
			measure.input.enableDrag();
			measure.isFlipped = false;
			measure.isInverted = false;
			measure.events.onInputDown.add(manipulate, measure);
		}
		
		//debugger
		
		var sprite = this.add.sprite(50, 300, 'tutorial')
		sprite.frame = 1;

        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = game.add.text( game.world.centerX, 15, "Music Puzzle", style );
        text.anchor.setTo( 0.5, 0.0 );
		
		//keys to manipulate measure pieces with
		vertical = game.input.keyboard.addKey(Phaser.Keyboard.W);
		vertical1 = game.input.keyboard.addKey(Phaser.Keyboard.S);
		horizontal = game.input.keyboard.addKey(Phaser.Keyboard.A);
		horizontal1 = game.input.keyboard.addKey(Phaser.Keyboard.D);
		
		vertical.onDown.add(flip, this);
		vertical1.onDown.add(flip, this);
		horizontal.onDown.add(invert, this);
		horizontal1.onDown.add(invert, this);
    }
    
    function update() {
	
	//frame order - 0 = normal
	//1 = h.png
	//2 = hv.png
	//3 = v.png
	
	   
    }
	
	function pPiano(){
		piano = true;
		}
		
	function pViolin(){
		piano = false;
		}
		
	function playAgain(){
	
		sound.stop();
		
		if(piano){
		
			sound.play('Tfinalp');
		}
		else{
			sound.play('Tfinalv');
			}
	
	}
	
	function check(){
		twinkle.play();
		}
	
	function test()
	{
	
		sound.stop();
		sound.play('T1');
	}
	
	function manipulate(){
	
			cur = this;
		}
	function flip(){
	
	
		cur.isFlipped = !cur.isFlipped;
		
			if(cur.isFlipped){
				if(cur.isInverted){
					//inverted, flipped. wasn't flipped.
					cur.frame = cur.frame + 1;
				}
				else{
					//flipped. wasn't flipped.
					cur.frame = cur.frame + 3;
				}
			}
			else{
				if(cur.isInverted){
					//inverted, was inverted and flipped
					
					cur.frame = cur.frame - 1;
				}
				else{
					//not inverted or flipped, was flipped
					cur.frame = cur.frame - 3;
				}
			}
	}
	
	function invert(){
	
	//main + 1 = inverted
	//main + 2 = inverted, and flipped
	//main +3 = flipped
		cur.isInverted = !cur.isInverted;
			
			if(cur.isFlipped){
				if(cur.isInverted){
					//flipped, inverted. was only flipped
					cur.frame = cur.frame - 1;
				}
				else{
					//flipped, was inverted and flipped.
					cur.frame = cur.frame + 1;
				}
			}
			else{
				if(cur.isInverted){
					//inverted, wasn't inverted.
					
					cur.frame = cur.frame + 1;
				}
				else{
					//not inverted, was inverted.
					cur.frame = cur.frame - 1;
				}
			}
			
	
	}
};
