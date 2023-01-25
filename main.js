var num = 0;
var arr = [];
var tex = "";

function preload() {
    video = createVideo("video.mp4");
}

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();
    canvas.hide();
}

function start() {
    ObjectDetector = ml5.ObjectDetector("CocoSSD",modelLoaded);
    document.getElementById("estado").innerHTML = "Cargando...";
}

function modelLoaded() {
    console.log("modelLoaded");
    tex = true;
    video.loop();
    video.speed(1);
    video.volume(0); 
}

function gotResult(result,error) {
    if (error) {
        console.log(error);
    } else{
        console.log(result);
        arr = result;
    }
}

function draw() {
    image(video,0,0,500,500);
    if (tex != "") {
        ObjectDetector.detect(video,gotResult);
        
    }
}