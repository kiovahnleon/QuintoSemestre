//en comnsola
const a = document.querySelector('#container');

const buscar = (e) => {
    a.innerHTML = '';
    const input = document.querySelector('#input').value;
    e.preventDefault();
    console.log(input);
    fetch("smae_base_datos.json")
        .then((response) => response.json())
        .then((data) => {

            const regex = new RegExp(`${input}`, 'i')
            const datos = data.SMAE.filter((element) => regex.test(element.Alimento))

            datos.forEach((element) => {
                console.log(element.Alimento)
                const display = document.createElement('li');
                display.innerText = element.Alimento;
                a.appendChild(display);
            })


        });
}

document.querySelector('form').addEventListener('submit', buscar);



//simple con map jared/kevin
/*         const datos = data.SMAE.map(data => data.Alimento);
        const regexp = /(\w|\s)*Zanahoria(\w|\s)* /gi;
        let match;

        while ((match = regexp.exec(datos))) {
            console.log(match[0]);
        }
    }, []); */


// simple con filter
/* fetch("smae_base_datos.json")
    .then((response) => response.json())
    .then((data) => {

        const datos = data.SMAE.filter((element) => /\bacelga\b/i.test(element.Alimento))

        datos.forEach((element) => console.log(element.Alimento))
    }); */