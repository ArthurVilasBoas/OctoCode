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

function  sideAberta(){
  
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


  // btn alerta



 function mostrarPoliticas(){

  var Politicas = "Política de Privacidade: \n\n Esta empresa valoriza a sua privacidade. \n \n Todos os dados coletados são usados exclusivamente para melhorar sua experiência e não serão compartilhados com terceiros sem sua autorização.Ao continuar navegando, você concorda com os termos de nossa Política de Privacidade." 



  alert(Politicas)
 }


 