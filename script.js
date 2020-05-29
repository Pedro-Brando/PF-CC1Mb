function bigImg(x) {
  x.style.height = "100px";
  x.style.width = "100px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}

function Rolld20(){

  //rolar os dados
  var resTotal = 0;

  for(var i = 0; i < 1; i++){
    var jogada = 1 + Math.floor(Math.random()*20);
    resTotal = resTotal + jogada; //resTotal += jogada;
  }
  
    var divResultado = document.getElementById("placeholder");
  divResultado.innerHTML = resTotal + "!";

}

function Rolld12(){

  //rolar os dados
  var resTotal = 0;

  for(var i = 0; i < 1; i++){
    var jogada = 1 + Math.floor(Math.random()*12);
    resTotal = resTotal + jogada; //resTotal += jogada;
  }
  
    var divResultado = document.getElementById("placeholder");
  divResultado.innerHTML =resTotal + "!";

}

function Rolld10(){

  //rolar os dados
  var resTotal = 0;

  for(var i = 0; i < 1; i++){
    var jogada = 1 + Math.floor(Math.random()*10);
    resTotal = resTotal + jogada; //resTotal += jogada;
  }
  
    var divResultado = document.getElementById("placeholder");
  divResultado.innerHTML = resTotal + "!";

}

function Rolld8(){

  //rolar os dados
  var resTotal = 0;

  for(var i = 0; i < 1; i++){
    var jogada = 1 + Math.floor(Math.random()*8);
    resTotal = resTotal + jogada; //resTotal += jogada;
  }
  
    var divResultado = document.getElementById("placeholder");
  divResultado.innerHTML = resTotal + "!";

}

function Rolld4(){

  //rolar os dados
  var resTotal = 0;

  for(var i = 0; i < 1; i++){
    var jogada = 1 + Math.floor(Math.random()*4);
    resTotal = resTotal + jogada; //resTotal += jogada;
  }
  
    var divResultado = document.getElementById("placeholder");
  divResultado.innerHTML = resTotal + "!";

}