const contain = document.querySelector('#resultados');
let texto;
const exp = /[\w\sáéíóú()+]*/;
let alm = [];

async function buscar() {
  const respuesta = await fetch('https://smae-5f163-default-rtdb.firebaseio.com/SMAE.json');
  const data = await respuesta.json();
  alm = data;
}
buscar();

btn.onclick = (e) => {
  e.preventDefault();
  texto = document.querySelector('input').value;
  const nombres = alm.map(data => data.Alimento)
  const busqueda = new RegExp(exp.source + texto + exp.source, 'gi');
  let match;

  document.getElementById("resultados").innerHTML = "";

  while ((match = busqueda.exec(nombres))) {
    const display = document.createElement('li');
    display.innerText = match[0];
    contain.appendChild(display);
    //document.getElementById("resultados").innerHTML += match[0] + "\n";
    console.log(match[0]);
  }

}


//lo que puso la profe
/* async function response() {
    const respuesta = await fetch('https://smae-5f163-default-rtdb.firebaseio.com/SMAE.json');
    const data = await respuesta.json();
    console.log(data);
}

response(); */