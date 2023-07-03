
//const divElem = document.querySelector('#estilo');
//const divElem1 = document.querySelector('img');

let rotate360 = [
{ transform: 'rotate(360deg)' }
];

let slowInfinite = {
  duration: 10000,
  iterations: Infinity
}

divElem.animate(rotate360, slowInfinite);
divElem1.animate(rotate360, slowInfinite);

/*function alerta(){
    alert('mensaje');
    }
    window.onload = function(){
    setTimeout('alerta()',5000);
    }*/