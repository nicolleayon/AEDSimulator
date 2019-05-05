// Runs when program is started
function main() {
  // Retrieve <canvas>, colors, and button element
  var btn = document.getElementById('btn')
  var powerbtn = document.getElementById('powerbtn');

  // btn.style.color = "red";
  //btn.onclick = function() {myFunction2()};
  //btn.onclick = function(event) { btn.style.color = "red"; };
  //btn2.onclick = myFunction();
  // btn2.onclick = function(event) { changeColors(u_FragColor, gl, 0.0, 0.0, 1.0, 1.0); };

}

function myFunction2() {
    document.getElementById("btn").style.color = "yellow";
    setTimeout(myFunction3, 3000);
}
function myFunction3() {
    document.getElementById("btn").style.color = "white";
}

function turnOnOff() {
    // document.getElementById("btn").style.backgroundColor = "red";
    if (powerbtn.src.match("black-pw-btn.png")){
      powerbtn.src="img/green-pw-btn.png";
    }
    else{
      powerbtn.src="img/black-pw-btn.png";
    }
    // btn.style.color = "blue";
}
