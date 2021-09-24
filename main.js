rightWristX = 0;
rightWristY = 0;
rightScore = "";

function setup() {
	canvas = createCanvas(1240,336);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(1240,336);
	canvas.parent('canvas');
	
    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function gotPoses(results, )
{
    if(results.length > 0)
    {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        rightScore = results[0].pose.keypoints[10];
        console.log(rightScore);
    }
}

function draw()
{
    if(rightScore > 0.2)
    {
        fill('red');
        stroke('black');
        circle(rightWristX, rightWristY, 20);
    }
}