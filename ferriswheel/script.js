var menu = document.getElementById('menu');
menu.addEventListener("click", dropdown);

function dropdown() {
   var x = document.getElementById('dropdown-content');
   document.getElementById("menu").classList.toggle("change");
   
  if (window.getComputedStyle(x).getPropertyValue('display') === 'none') {
    x.style.display = 'block';
    
  } else {
    x.style.display = 'none';
  }
}
// temp