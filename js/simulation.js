// Runs when program is started
function main() {
  // Retrieve <canvas>, colors, and button element
  var btn = document.getElementById('btn')
  var powerbtn = document.getElementById('powerbtn');
  var shockbtn = document.getElementById('shockbtn');
  var blank = document.getElementById('blank');
  var playing = document.getElementById('playing');

  // btn.style.color = "red";
  //btn.onclick = function() {myFunction2()};
  //btn.onclick = function(event) { btn.style.color = "red"; };
  //btn2.onclick = myFunction();
  // btn2.onclick = function(event) { changeColors(u_FragColor, gl, 0.0, 0.0, 1.0, 1.0); };

}

function shockButton() {
    if (shockbtn.src.match("img/shockOff.png")){
      shockbtn.src="img/shockOn.png";
      setTimeout(function(){
        shockbtn.src="img/shockOff.png";
      }, 3000);
    }
    else{
      shockbtn.src="img/shockOff.png";
    }
}

//turns power button on and off (colors turn green and black )
function turnOnOff() {
    //if power button is off, turn on and display screen (aka hide black box)
    if (powerbtn.src.match("black-pw-btn.png")){
      powerbtn.src="img/green-pw-btn.png";
      blank.style.display="none";
    }
    //else turn off and turn off screen
    else{
      powerbtn.src="img/black-pw-btn.png";
      blank.style.display="block";
    }
    randomGenerator();
    // btn.style.color = "blue";
}


//https://www.youtube.com/watch?v=BAWGjNAj_vA
//https://www.youtube.com/watch?v=NxNIXSLrZF0
//https://www.youtube.com/watch?v=7ukk5hOV8e0
function randomGenerator() {
    var max = 2;
    var min = 0;
    var ranNum = Math.round(Math.random() * (+max - +min) + +min);
    if(ranNum == 0){
      playing.src="https://www.youtube.com/embed/7ukk5hOV8e0";
    }
    else if(ranNum == 1){
      playing.src="https://www.youtube.com/embed/NxNIXSLrZF0";
    }
    else {
      playing.src="https://www.youtube.com/embed/BAWGjNAj_vA";
    }
    return ranNum;
}

// function hide(){
//   this.
// }
