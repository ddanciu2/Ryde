/* Open when someone clicks on the span element */
function openMenu() {
    document.getElementById("hamburgerMenu").style.zIndex = 0;
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeMenu() {
    document.getElementById("hamburgerMenu").style.zIndex = 1;
    document.getElementById("myNav").style.width = "0%";
  }