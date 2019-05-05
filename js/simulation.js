// Runs when program is started
function main() {
  // Retrieve <canvas>, colors, and button element
  var btn = document.getElementById('btn')
  var btn2 = document.getElementById('btn2');

  // btn.style.color = "red";
  btn.onclick = function(event) { btn.style.color = "red"; };
  // btn2.onclick = function(event) { changeColors(u_FragColor, gl, 0.0, 0.0, 1.0, 1.0); };

}

function myFunction() {
    document.getElementById("btn").style.backgroundColor = "red";
    // btn.style.color = "blue";
}
