song = "";
music ="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWrsitY = 0;

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

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses );
}

function modelLoaded()
{
  console.log('poseNet is initialized');
}


function gotPoses(results)
{
  if (results.length>0) {
    console.log(results);
    leftWristX = results[0].pose.leftWRist.x;
        leftWristY = results[0].pose.leftWRist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
  }
}

function draw()
{
    image(video,0,0,600,500);
    fill("#ff0000");
    stroke("#ff0000");
}

