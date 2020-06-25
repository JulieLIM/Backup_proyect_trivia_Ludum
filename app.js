// Pantalla 1: Bienvenida
let answer1;
let answer2;
let answer3;

let count = 0;

let time = 10;

let clock;

//Pantalla 2: Eleccion Tema
function start(){
 let nombre = document.getElementById("name").value;
 let body = document.body;
 body.classList.remove("LUDUM");

document.getElementById("saludo").innerHTML="Hola "+nombre+ "!!!";
document.getElementById("bienvenida").style.display = "none";
document.getElementById("eleccionTema").style.display = "block";
}

//Pantalla 3: Preguntas: Peliculas

function movies(){
  count = 0;
  document.getElementById("eleccionTema").style.display = "none";
  document.getElementById("resultados").style.display = "none";
  document.getElementById("movie1").style.display = "block";

  //mostrar timming pregunta 1
  document.getElementById("timing").innerHTML= "10";

  clock = setInterval(function(){
    if(time === 0){
      answerMovie1(false);
    }
    else{
      time--;
      document.getElementById("timing").innerHTML= time;
    }
  }, 1000);
}
// Pelicula 1 
function answerMovie1(answer){

  clearInterval(clock);

  if(answer === true){
    answer1 = "correcta";
    count++;
  }
  else{
    answer1 = "incorrecta";
  }
  document.getElementById("movie1").style.display = "none";
  document.getElementById("movie2").style.display = "block";
  
  //reinicia reloj
  time = 10;
  document.getElementById("timing").innerHTML= time;

  clock = setInterval(function(){
    if(time === 0){
      answerMovie2(false);
    }
    else{
      time--;
      document.getElementById("timing").innerHTML= time;
    }
  }, 1000);
}

//Pelicula 2
function answerMovie2(answer){

  clearInterval(clock);

  if(answer === true){
    answer2 = "correcta";
    count++;
  }
  else{
    answer2 = "incorrecta";
  }
  document.getElementById("movie2").style.display = "none";
  document.getElementById("movie3").style.display = "block";

  //reinicia reloj
  time = 10;
  document.getElementById("timing").innerHTML= time;

  clock = setInterval(function(){
    if(time === 0){
      answerMovie3(false);
    }
    else{
      time--;
      document.getElementById("timing").innerHTML= time;
    }
  }, 1000);
}

//Pelicula 3
function answerMovie3(answer){
  clearInterval(clock);

   if(answer === true){
    answer3 = "correcta";
    count++;
  }
  else{
    answer3 = "incorrecta";
  }

document.getElementById("answer1").innerHTML= "La respuesta 1 es " + answer1;
document.getElementById("answer2").innerHTML= "La respuesta 2 es " + answer2;
document.getElementById("answer3").innerHTML= "La respuesta 3 es " + answer3;
  document.getElementById("correctas").innerHTML= "Respuestas correctas: " + count;


  document.getElementById("movie3").style.display = "none";
  document.getElementById("resultados").style.display = "block";

  //borrar reloj
  document.getElementById("timing").innerHTML= "";
}


//Pantalla 3: Preguntas: Paises

function countries(){
  count = 0;
  document.getElementById("eleccionTema").style.display = "none";
  document.getElementById("resultados").style.display = "none";document.getElementById("countries1").style.display = "block";

   //mostrar timming pregunta 1
  document.getElementById("timing").innerHTML= "10";

  clock = setInterval(function(){
    if(time === 0){
      answerCountries1(false);
    }
    else{
      time--;
      document.getElementById("timing").innerHTML= time;
    }
   }, 1000);
  }
// Paises 1 
function answerCountries1(answer){

  clearInterval(clock);

  if(answer === true){
    answer1 = "correcta";
    count++;
  }
  else{
    answer1 = "incorrecta";
  }
  document.getElementById("countries1").style.display = "none";
  document.getElementById("countries2").style.display = "block";

  //reinicia reloj
  time = 10;
  document.getElementById("timing").innerHTML= time;

  clock = setInterval(function(){
    if(time === 0){
      answerCountries2(false);
    }
    else{
      time--;
      document.getElementById("timing").innerHTML= time;
    }
  }, 1000);
  
}


// Paises 2 
function answerCountries2(answer){

  clearInterval(clock);

  if(answer === true){
    answer2 = "correcta";
    count++;
  }
  else{
    answer2 = "incorrecta";
  }
  document.getElementById("countries2").style.display = "none";
  document.getElementById("countries3").style.display = "block";

 //reinicia reloj
  time = 10;
  document.getElementById("timing").innerHTML= time;

  clock = setInterval(function(){
    if(time === 0){
      answerCountries3(false);
    }
    else{
      time--;
      document.getElementById("timing").innerHTML= time;
    }
  }, 1000);
}

// Paises 3 
function answerCountries3(answer){

  clearInterval(clock);

  if(answer === true){
    answer3 = "correcta";
    count++;
  }
  else{
    answer3 = "incorrecta";
  }

document.getElementById("answer1").innerHTML= "La respuesta 1 es " + answer1;
document.getElementById("answer2").innerHTML= "La respuesta 2 es " + answer2;
document.getElementById("answer3").innerHTML= "La respuesta 3 es " + answer3;
  document.getElementById("correctas").innerHTML= "Respuestas correctas: " + count;


  document.getElementById("countries3").style.display = "none";
  document.getElementById("resultados").style.display = "block";

  //borrar reloj
  document.getElementById("timing").innerHTML= "";
}



