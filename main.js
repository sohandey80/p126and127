song = "";
music ="";

function preload()
{
  song = loadSound("Imagine Dragons - Believer (Official Music Video).mp3");
  music = loadSound ("K'NAAN - Wavin' Flag (Coca-Cola Celebration Mix).mp3");
}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,600,500);
}
