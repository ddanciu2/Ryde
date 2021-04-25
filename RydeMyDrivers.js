/* Open when someone clicks on the span element */
function openMenu() {
  document.getElementById("hamburgerMenu").style.zIndex = 0;
  document.getElementById("HMLayout").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeMenu() {
  document.getElementById("hamburgerMenu").style.zIndex = 1;
  document.getElementById("HMLayout").style.width = "0%";
}

function submitDriver(){
  document.getElementById("enterDriverInfo").style.display = "block";
}



var i = 0;

function duplicateChild(){
  var original = document.getElementById('Driver' + i);
  var clone = original.cloneNode(true); // "deep" clone
  clone.id = "Driver" + ++i; // there can only be one element with an ID
  original.parentNode.appendChild(clone);

}

function submitDriver1(){
  duplicateChild();
  document.getElementById("enterDriverInfo").style.display = "none";
}

function backInfo(){
  document.getElementById("enterDriverInfo").style.display = "none";

}


