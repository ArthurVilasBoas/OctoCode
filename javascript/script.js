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

function clickMenu() {
  if (SideBar.style.display == 'block') {
    SideBar.style.display = 'none'
    overlay.style.display = 'none'
  } else {
    SideBar.style.display = 'block'
    overlay.style.display = 'block';
        
    }
  }
