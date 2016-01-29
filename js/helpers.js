var lista1;
var lista2;
var servicios;
var publi;


function inicio(){
  lista1 = $('#lista1');
  lista2 = $('#lista2');
  servicios = $('#servicios');
  publi = $('#publicaciones');
  servicios.hover(mostrarLista1);
  publi.hover(mostrarLista2);
}


function mostrarLista1(){
  lista1.css('display','block')
  lista2.css('display','none');
}

function mostrarLista2(){
  lista1.css('display','none');
  lista2.css('display','block');  
}