var texto;
var contador = 0;
const exp = /[\w\s]*/;

async function buscar() {
  texto = document.querySelector('input').value;
  const respuesta = await fetch('https://search-smae-default-rtdb.firebaseio.com/SMAE.json');
  const data = await respuesta.json();
  const nombresVerduras = data.map(data => data.Alimento)
  const busqueda = new RegExp(exp.source +  texto  + exp.source, 'gi');
  let match;

  contador = 0;
  document.getElementById("resultados").innerHTML = "";

  if (texto == "") {
    document.getElementById("Contador").innerHTML = "Ingrese un valor de búsqueda válido.";
  } else {
    while ((match = busqueda.exec(nombresVerduras)) !== null) {
      document.getElementById("resultados").innerHTML += match[0] + "\n";
      console.log(match[0]);
      contador++;
    }
    document.getElementById("Contador").innerHTML = "Resultados: " + contador;
  }
}

// function buscar() {
  
// }