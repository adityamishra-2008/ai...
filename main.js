Status="";
video="";
objects="";
function preload(){
    video=createVideo("video.mp4");
video.hide();

}
function setup()
{
canvas=createCanvas(480,380);
canvas.center();

}

function start(){
    Object_detector=ml5.objectDetector("cocossd",modelloaded);
 document.getElementById("status").innerHTML="Status: detecting objects ";

}
function modelloaded(){
    console.log("model is loaded");
Status=true;
video.loop();
video.speed(1);
video.volume(0);

}

function draw(){
    image(video,0,0,480,380);
if(Status!=""){
Object_detector.detect(video,got_result);
for(i=0;i<obects.length;i++){
 document.getElementById("status").innerHTML="Status: objects detected";
document.getElementById("num_obj").innerHTML="Number of objects detected are:"+objects.length;
fill("black");
stroke("red");
percent=floor(obects[i].confidence*100);
text(objects[i].lable+" "+percent+"%",objects[i].x+15,objects[i].y+15);
nofill()
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

}

}
function got_result()
{
if(error){
    console.error(error);

}
else{
  console.log(results);
objects=results;

}
}
}