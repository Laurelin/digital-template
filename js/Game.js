BasicGame.Game = function (game) {

	 //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.this;      //  a reference to the currently running this (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the this camera (Phaser.Camera)
    this.cache;     //  the this cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the this stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the this world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.physics;   //  the physics manager (Phaser.Physics)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

    //  You can use any of these from any function within this State.
    //  But do consider them as being 'reserved words', i.e. don't create a property for your own this called "world" or you'll over-write the world reference.

};

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
	var playList = [];

BasicGame.Game.prototype = {
    
    /*function preload() {
        // Load an image and call it 'logo'.
        this.load.atlasJSONHash('tutorial', 'assets/tutorial.png', 'assets/tutorial.json');
		this.load.audio('sound', 'assets/Twinkle.wav');
    }*/
  
    create: function () {
		//all playbacks are default piano
		piano = true;

		song = new Array(9);
		
		//background
		this.add.sprite( 0, 0, 'tutorial', 'musicback.jpg');
		
		//audio sprite
		sound = this.add.audio('sound');
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
		
		twinkle = this.add.audio('twinkle')
		
		
		//buttons!
		replayButton = this.add.button( 18, 20 , 'tutorial', playAgain, this, 'playbutton2.png', 'playbutton2.png', 'playpressed.png', 'playbutton2.png');
		playButton = this.add.button( 890, 20 , 'tutorial', test, playButton, 'playbutton1.png', 'playbutton1.png', 'playpressed1.png', 'playbutton1.png');
		checkButton = this.add.button( this.world.centerX, 520 , 'tutorial', check, this, 'check.png', 'check.png', 'checkpressed.png', 'check.png');
		pianoButton = this.add.button( 890, 180 , 'tutorial', pPiano, this, 'piano.png', 'piano.png', 'piano.png', 'piano.png');
		violinButton = this.add.button( 890, 300 , 'tutorial', pViolin, this, 'violin.png', 'violin.png', 'violin.png', 'violin.png');
		
		
		
		for(var i = 0; i < 6; i++)
		{
			measure = this.add.sprite( 50 + 150*i, 450, 'tutorial', 'T'+ (i+1).toString() +'.png')
			measure.inputEnabled = true;
			measure.input.enableDrag();
			measure.input.enableSnap(90, 90, false, true);
			measure.events.onDragStop.add(fixLocation);
			measure.isFlipped = false;
			measure.isInverted = false;
			measure.events.onInputDown.add(manipulate, measure);
			
		}
		
		for(var i = 0; i < 6; i++)
		{
			measure = this.add.sprite( 50 + 150*i, 450, 'tutorial', 'T'+ (i+1).toString() +'.png')
			measure.inputEnabled = true;
			measure.input.enableDrag();
			measure.input.enableSnap(90, 90, false, true);
			measure.events.onDragStop.add(fixLocation);
			measure.isFlipped = false;
			measure.isInverted = false;
			measure.events.onInputDown.add(manipulate, measure);
			
		}
		
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = this.add.text( this.world.centerX, 15, "Twinkle Twinkle Little Star", style );
        text.anchor.setTo( 0.5, 0.0 );
		
		//draw helper boxes
		for(var i = 0; i < 8; i++)
		{	
			if(i < 4)
				var graphics = this.add.graphics(190 + i*150, 200);
			else
				var graphics = this.add.graphics(190 + (i - 4)*150, 300);
			
			graphics.lineStyle(2, 0xffd900, 1);
			graphics.drawRect(0, 0, 150, 60);
		}
		
		
		//keys to manipulate measure pieces with
		vertical = this.input.keyboard.addKey(Phaser.Keyboard.W);
		vertical1 = this.input.keyboard.addKey(Phaser.Keyboard.S);
		horizontal = this.input.keyboard.addKey(Phaser.Keyboard.A);
		horizontal1 = this.input.keyboard.addKey(Phaser.Keyboard.D);
		
		vertical.onDown.add(flip, this);
		vertical1.onDown.add(flip, this);
		horizontal.onDown.add(invert, this);
		horizontal1.onDown.add(invert, this);
    },
	
    update: function () {
	
	}
	
};

	function test(){
		for(var i = 0; i < playList.length; i++)
		{
			sound.play(playList[i]);
			//empty loop so that the program waits for one marker to complete before moving to the next.
			while(sound.isPlaying){
			}
		}
	}
	
	//snaps measures to specific locations.
	function fixLocation(measure){
	
		if(measure.x < 190){
			measure.x = 190;
		}
		else if(measure.x > 340 && measure.x < 490){
			measure.x = 340;
			}
		else if(measure.x > 490 && measure.x < 640)
		{
			measure.x = 490;
		}
		else if(measure.x > 640)
		{
			measure.x = 640;
		}
		
		if(measure.y < 200){
			measure.y = 200;
		}
		else if(measure.y > 200 && measure.y < 300){
			measure.y = 300;
		}
		else if (measure.y > 300 && measure.y < 450){
			measure.y = 300;
		}		
			
		setPlayback(measure);
		setIndex(measure);
		updatePlayList(measure);
	}
	
	//playlist is array of sound markers
	function updatePlayList(measure){
		
		playList[measure.index] = measure.soundName;
		
	}
	
	
	function setIndex(measure)
	{
		measure.index = (measure.x - 190) / 150;
		
		if(measure.y == 300)
			measure.index += 3;
	}
	
	function setPlayback(measure){
	
		var num;
		if(piano){
			num = measure.frame + 4;
			if(!num%4){ //if num is divisible by four
				measure.soundName = 'T' + (num%4);
			}
			
		}
		
	}
	
	//playback is piano?
	function pPiano(){
		piano = true;
		}
		
	//playback is violin?	
	function pViolin(){
		piano = false;
		}
		
	//play the problem
	function playAgain(){
	
		sound.stop();
		
		if(piano){
		
			sound.play('Tfinalp');
		}
		else{
			sound.play('Tfinalv');
			}
	
	}
	
	//check if correct
	function check(){
		twinkle.play();
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
