// Runs when program is started
function main() {
  // Retrieve <canvas>, colors, and button element
  var btn = document.getElementById('btn')
  var powerbtn = document.getElementById('powerbtn');
  var shockbtn = document.getElementById('shockbtn');
  var blank = document.getElementById('blank');

  // btn.style.color = "red";
  //btn.onclick = function() {myFunction2()};
  //btn.onclick = function(event) { btn.style.color = "red"; };
  //btn2.onclick = myFunction();
  // btn2.onclick = function(event) { changeColors(u_FragColor, gl, 0.0, 0.0, 1.0, 1.0); };

}

function shockButton() {
    if (shockbtn.src.match("img/shockOff.png")){
      shockbtn.src="img/shockOn.png";
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
    // btn.style.color = "blue";
}

// function hide(){
//   this.
// }
