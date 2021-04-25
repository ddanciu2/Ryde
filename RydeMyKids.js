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


function submitChild(){
  document.getElementById("enterChildInfo").style.display = "block";
}



var i = 0;

function duplicateChild(){
  var original = document.getElementById('Child' + i);
  var clone = original.cloneNode(true); // "deep" clone
  clone.id = "Child" + ++i; // there can only be one element with an ID
  /* clone.onclick = duplicate */; // event handlers are not cloned
  original.parentNode.appendChild(clone);

}

function submitChild1(){
  duplicateChild();
  document.getElementById("enterChildInfo").style.display = "none";
  
}

function backInfo(){
  document.getElementById("enterChildInfo").style.display = "none";

}