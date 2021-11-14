lipsX = 0;
lipsY = 0;
function preload()
{
    moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.center();
    video.hide();
    
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw()
{
    image(video, 0, 0, 350, 350);
    image(moustache, lipsX, lipsY, 50, 50 );
}
function modelLoaded()
{
    console.log("model has loaded");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log("length");
        console.log("lips x" + results[0].pose.nose.x);
        console.log("lips y" + results[0].pose.nose.y);
        lipsX = results[0].pose.nose.x-20;
        lipsY = results[0].pose.nose.y-10;
    }
}

function take_snapshot()
{
    save('picture');
}