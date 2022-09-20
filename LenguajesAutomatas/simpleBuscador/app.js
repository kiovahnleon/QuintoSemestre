//en comnsola
const a = document.querySelector('#lista');

const buscar = (elemento) => {
    a.innerHTML = '';
    const valorEntrada = document.querySelector('#entrada').value;
    elemento.preventDefault();
    console.log(valorEntrada);
    fetch("smae_base_datos.json")
        .then((response) => response.json())
        .then((data) => {

            const regex = new RegExp(`${valorEntrada}`, 'i')
            const datos = data.SMAE.filter((cosa) => regex.test(cosa.Alimento))

            datos.forEach((pieza) => {
                console.log(pieza.Alimento)
                const mostrar = document.createElement('li');
                mostrar.innerText = pieza.Alimento;
                a.appendChild(mostrar);
            })


        });
}

document.querySelector('form').addEventListener('submit', buscar);
