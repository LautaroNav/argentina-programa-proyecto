const formulario = document.querySelector("#formulario form");

const nombre = document.querySelector(".inputName");
const apellido = document.querySelector(".inputLastname");
const email = document.querySelector(".inputEmail");
const botonForm = document.querySelector(".botonForm");

const resumen = document.querySelector(".resume");

const nombreParrafo = document.querySelector(".nombreP");
const apellidoParrafo = document.querySelector(".apellidoP");
const emailParrafo = document.querySelector(".emailP");

botonForm.addEventListener("click", function () {
  formulario.style.display = "none";
  resumen.style.display = "block";

  (nombreParrafo.innerHTML = nombre.value),
    (apellidoParrafo.innerHTML = apellido.value),
    (emailParrafo.innerHTML = email.value);

  console.log(nombre.value, apellido.value, email.value);
});

/*POKECARD*/
/*FUNCIONA ESTE MÉTODO*/
const inputPokemon = document.querySelector(".inputPokemon");
const botonPokemon = document.querySelector("#main  button");
const nombrepokemon = document.querySelector(".pokeName");

botonPokemon.addEventListener("click", function () {
  const valor = inputPokemon.value;
  /*SE CREA UNA FUNCION PARA AGREGAR EL POKEMON */
  nombrepokemon.innerHTML = `Soy el pokemon ${valor}`;
  console.log(valor);
});
