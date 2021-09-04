canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mars_images = ["nasa_mars_image_1.jpg", "nasa_mars_image_2.jpg", "nasa_mars_image_3.jpg", "nasa_mars_image_4.jpg", "nasa_mars_image_5.jpg"];
var randomnumber = Math.floor(Math.random()*5);

rover_height = 100;
rover_width = 150;

rover_img = "rover.png";
background_img = mars_images[randomnumber];

rover_x = 10;
rover_y = 10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_img;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode
if(keyPressed == '38'){
    up();
    console.log("up");
}
if(keyPressed == '40'){
    down();
    console.log("down");
}
if(keyPressed == '37'){
    left();
    console.log("left");
}
if(keyPressed == '39'){
    right();
    console.log("right");
}
}

function up(){
if(rover_y >= 0)
{
    rover_y -= 10;

console.log("Moving Up"); 
console.log("New Coords: X= " + rover_x + " Y=" + rover_y);
uploadBackground();
uploadrover();
}
}

function down(){
    if(rover_y <= 500)
    {
        rover_y += 10;
    
    console.log("Moving Down"); 
    console.log("New Coords: X= " + rover_x + " Y=" + rover_y);    
    uploadBackground();
    uploadrover();
    }
    }
    function left(){
        if(rover_x >= 0)
        {
            rover_x -= 10;
        
        console.log("Moving Left"); 
        console.log("New Coords: X= " + rover_x + " Y=" + rover_y);
        
        uploadBackground();
        uploadrover();
        }
        }
        function right(){
            if(rover_x <= 700)
            {
                rover_x += 10;
            
            console.log("Moving Right"); 
            console.log("New Coords: X= " + rover_x + " Y=" + rover_y);            
            uploadBackground();
            uploadrover();
            }
            }

            function changemars()
            {
                randomnumber = Math.floor(Math.random()*5);  
                background_img = mars_images[randomnumber];
                add();
                uploadBackground(); 
                uploadrover();
                console.log("Changing Image"); 
console.log("New Map Is Map #" + mars_images[randomnumber] );
            }

