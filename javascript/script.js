let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 5000)


function nextImage() {
  count++;
  if (count > 3) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}




const overlay = document.querySelector('.overlay');
const navbar = document.getElementById('SideBar');

navbar.addEventListener("mouseover", () => {
  acionaOverlay();
});
navbar.addEventListener("mouseout", () => {
  removeOverlay();
});

function acionaOverlay() {
  overlay.style.display = 'block';
  overlay.style.filter = 'blur(1.7rem)';
  console.log("Zika de mais ");
}

function removeOverlay() {
  overlay.style.display = 'none';
}

function clickMenu() {
  if (SideBar.style.display == 'block') {
    SideBar.style.display = 'none'
  } else {
    SideBar.style.display = 'block'
        
    }
  }
