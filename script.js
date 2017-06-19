const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const myTime = document.getElementById('myTime');
var time = new Date();


var face = new Image();
face.src = "images/face.png";
var hour = new Image();
hour.src = "images/hours.png";
var sec = new Image();
sec.src = "images/seconds.png";
var min = new Image();
min.src = "images/minutes.png";

//const sec = new image();
//const min = new image();





hour.addEventListener('load', () =>{
  setInterval(draw,10);
})

function draw(){
time = new Date();
context.clearRect(0,0,500,500);
context.drawImage(face,0,0);
context.save();
context.translate(250,250);
context.rotate((time.getHours()/12*2*Math.PI)+(time.getMinutes()/720*2*Math.PI));
context.drawImage(hour,-32,-185);
context.restore();
context.save();
context.translate(250,250);
context.rotate(time.getMinutes()/60*2*Math.PI);
context.drawImage(min,-32,-200);
context.restore();
context.save();
context.translate(250,250);
context.rotate(time.getSeconds()/60*2*Math.PI);
context.drawImage(sec,-32,-218);




context.restore();
myTime.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();


}
