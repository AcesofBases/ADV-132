function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    status1=true;
    objectDetector.detect(img,gotResult);
    }
    function gotResult(){
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
            objects=results;
        }
        }