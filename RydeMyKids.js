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

/* Duplicates a child element */
function duplicateChild(){
  var original = document.getElementById('Child' + i);
  var clone = original.cloneNode(true);
  clone.id = "Child" + ++i;
  original.parentNode.appendChild(clone);
}

/* Removes a child element */
function removeChild() {
  console.log("In removeChild()");
  var child = document.getElementById('Child' + i);
  var original = document.getElementById('Child' + --i);
  var result = original.parentNode.hasChildNodes();
  
  if (result)
    alert("There is a child");
  //original.parentNode.removeChild(child);
}

function submitChild1(){
  duplicateChild();
  document.getElementById("enterChildInfo").style.display = "none";
}

function backInfo(){
  document.getElementById("enterChildInfo").style.display = "none";

}