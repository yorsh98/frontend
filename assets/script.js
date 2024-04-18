

/*Si clicamos en el botón del sol, borrarémos la clase css dark-mode del div 
con id page y se aplicará el estilo active al sol*/
document.getElementById('id-sun').onclick = function(){
  document.getElementById('page').classList.remove('dark-mode')
  document.getElementById('id-moon').classList.remove('active')
  this.classList.add('active')
  document.getElementById('imgchange').src = "img/4.png";

  
  const imgchange = document.getElementById('imgchange'); 
  imgchange.src = 'img/4.png';
}
/*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
con id page y se aplicará el estilo active a la luna*/
document.getElementById('id-moon').onclick = function(){
  document.getElementById('page').classList.add('dark-mode')
  document.getElementById('id-sun').classList.remove('active')
  this.classList.add('active')
  document.querySelector('.background-image').style.backgroundImage = "url(/assets/4.png')";
  document.getElementById('id-moon').style.backgroundImage = "url(img/4.png)";

  const imgchange = document.getElementById('imgchange'); 
  imgchange.src = 'img/3.png';  
}


//validaciones form

function ValidaNombre() {
  let nombre = document.getElementById("nombre").value;
  console.log("el nombre es " + nombre);
  // let x = Array.from(nombre);
  //console.log(x);
  let z = nombre.includes(' ');
  console.log(z);
  var msjError = document.getElementById("nombre");


  if (nombre === '') {
    msjError.classList.add('is-invalid');
  } else if (z) {
    console.log(" tiene espacios");
    msjError.classList.add("is-invalid");
  } else {
    msjError.classList.remove("is-invalid");
    msjError.classList.add("is-valid");
    document.getElementById("nombre").value = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    console.log(nombre.slice(1));
  }
}

function ValidaApellido() {
  let apellido = document.getElementById("apellido").value;
  console.log("el apellido es " + apellido);
  // let x = Array.from(apellido);
  //console.log(x);
  let z = apellido.includes(' ');
  console.log(z);
  var msjError = document.getElementById("apellido");
  if (apellido === '') {
    msjError.classList.add('is-invalid');
  } else if (z) {
    console.log(" tiene espacios");
    msjError.classList.add("is-invalid");
  } else {
    msjError.classList.remove("is-invalid");
    msjError.classList.add("is-valid");
    document.getElementById("apellido").value = apellido.charAt(0).toUpperCase() + apellido.slice(1);
    console.log(apellido.slice(1));
  }
}

function validaForm() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let btnAgregar = document.getElementById("btnAgregar");

  if (nombre != '' && apellido != '') {
    btnAgregar.disabled = false;
  } else {
    btnAgregar.disabled = true;
  }
  console.log(validaForm);
}
