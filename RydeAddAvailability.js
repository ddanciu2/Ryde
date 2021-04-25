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
  
  function submitAvailability(){
    document.getElementById("enterAvailableInfo").style.display = "block";
  }


  var i = 0;

function duplicateChild(){
  var original = document.getElementById('Availability' + i);
  var clone = original.cloneNode(true); // "deep" clone
  clone.id = "Availability" + ++i; // there can only be one element with an ID
  original.parentNode.appendChild(clone);

}

function submitAvailability1(){
  duplicateChild();
  document.getElementById("enterAvailableInfo").style.display = "none";
}

function backInfo(){
  document.getElementById("enterAvailableInfo").style.display = "none";

}

