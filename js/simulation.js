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

function randomGenerator() {
    var max = 5;
    var min = 0;
    var ranNum = Math.round(Math.random() * (+max - +min) + +min);
    if(ranNum == 0){
      console.log('ranNum = 0? '+ ranNum);
      //MINIONS
      playing.src="https://www.youtube.com/embed/SmbdY5FpRwA";
      // playing.load();
    }
    else if(ranNum == 1){
      console.log('ranNum = 1? '+ ranNum);
      //ELMO
      playing.src="https://www.youtube.com/embed/3gt6cHooI6M?rel=0 ";
      // playing.load();
    }
    else if(ranNum == 2){
      console.log('ranNum = 2? '+ ranNum);
      // MINIONS
      playing.src="https://www.youtube.com/embed/YPoTpvsFpvY";
      // playing.load();
    }
    else if(ranNum == 3){
      console.log('ranNum = 3? '+ ranNum);
      //CORGIS
      playing.src="https://www.youtube.com/embed/cS6J6BLDZoo";
      // playing.load();
    }
    else if(ranNum == 4){
      console.log('ranNum = 4? '+ ranNum);
      //BOBS BURGERS
      playing.src="https://www.youtube.com/embed/5zI82OxCpOw";
      // playing.load();
    }
    else{
      console.log('ranNum = 5? '+ ranNum);
      // AED
      playing.src="https://www.youtube.com/embed/0jaqSFCNrX0";
    }
    return ranNum;
}

// function hide(){
//   this.
// }
