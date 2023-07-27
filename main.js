//Create a reference for canvas 
canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
gimg = "car2.png";

var gx = 5;
var gy = 225;
var gw = 75;
var gh = 100;

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	bg_imgTag = new Image();
    bg_imgTag.onload = uploadBackground;
    bg_imgTag.src = background_image;

	greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = "car2.png";
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, gx, gy, gw, gh)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (gy > 65)
		{
			gy -= 10;
			uploadBackground();
			uploadgreencar();
			console.log(gy);
		}

	}

function down()
{
	//Define function to move the car downward
	if (gy < 245)
		{
			gy += 10;
			uploadBackground();
			uploadgreencar();
			console.log(gy);
		}
}

function left()
{
	//Define function to move the car left side
	{
		if (gx > 0)
		{
			gx -= 10;
			uploadBackground();
			uploadgreencar();
			console.log(gx);
		}
	}
}

function right()
{
	//Define function to move the car right side
	if (gx < 725)
    {
        gx += 10;
		uploadBackground();
		uploadgreencar();
        console.log(gx);
    }
}