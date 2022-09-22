const contain = document.querySelector('#resultados');
let texto;
const exp = /[\w\sáéíóú()+]*/;
let arr = [];
let contador = 0;

async function buscar() {
  const respuesta = await fetch('https://smae-5f163-default-rtdb.firebaseio.com/SMAE.json');
  const data = await respuesta.json();
  arr = data;
}
buscar();

btn.onclick = (e) => {
  e.preventDefault();
  texto = document.querySelector('input').value;
  const nombres = arr.map(data => data.Alimento)
  const busqueda = new RegExp(exp.source + texto + exp.source, 'gi');
  let match;

  document.getElementById("resultados").innerHTML = "";

  while ((match = busqueda.exec(nombres))) {
    const display = document.createElement('li');
    display.innerText = match[0];
    contain.appendChild(display);
    //document.getElementById("resultados").innerHTML += match[0] + "\n";
    console.log(match[0]);
    contador++;
  }

}




//lo que puso la profe
/* async function response() {
    const respuesta = await fetch('https://smae-5f163-default-rtdb.firebaseio.com/SMAE.json');
    const data = await respuesta.json();
    console.log(data);
}

response(); */