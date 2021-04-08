function uploadImage(event) {
    var image = document.getElementById("addPhoto");
    image.src = URL.createObjectURL(event.target.files[0]);
}

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
    window.location.href= "MyKidsFilled.html";
}