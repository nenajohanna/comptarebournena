var centi=3
var secon=59 
var minu=59 


var demarre = document.getElementById('demarre').value;
var pause = document.getElementById('pause').value;
var efface = document.getElementById('efface').value;


function chrono(){
centi++; 
if (centi>9){centi=0;secon--} 

if (secon>59){secon=0;minu--} 
document.secondes.c.value=" "+centi 
document.secondes.a.value=" "+secon
document.secondes.b.value=" "+minu 
compte=setTimeout('chrono()',100) 
}

function rasee(){ 
document.getElementById("demarre").action=false;
centi=0;
secon=0;
minu=0;
document.secondes.c.value=" "+centi
document.secondes.a.value=" "+secon
document.secondes.b.value=" "+minu
}
function stop(){
      clearTimeout(compte);
      document.getElementById("demarre").action=false;
      }

 window.addEventListener("load",function(){
document.getElementById('demarre').addEventListener('click', chrono);
document.getElementById('pause').addEventListener('click', stop);
document.getElementById('efface').addEventListener('click', rasee);
 });