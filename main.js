var nose, img;
function preload(){}
function setup(){
    c=createCanvas(424,300);
    c.center();
    cam=createCapture(VIDEO);
    cam.size(424,300);
    cam.hide();
    ml=ml5.poseNet(cam, modelLoaded);
    ml.on('pose', onResults);
}
function draw(){
    image(cam,0,0,424,300);
}
function modelLoaded(){console.log("Model Loaded!");}
function onResults(results){
    if(results.length==0){
        console.error("Error: No results received");
    }else{
        console.log(results);
    }
}
