//Primer version que no funciona
/* fetch(smae_base_datos.json)
    .then((response) => response.json())
    .then((json) => {

        const datos = comida.SMAE.filter((element) => /\bnaranja\b/i.test(element.Alimento))

        json.SMAE.forEach((v, i) => console.log(element.Alimento))

    }); */

//Segunda version, imprime en la pagina
const d = document;

const $container = d.createElement("div");

let data;

d.querySelector("form").addEventListener("submit", (e) => {

    e.preventDefault();
    data = d.querySelector("input[type='text']").value;

    fetch("smae_base_datos.json")
        .then((res) => res.json())
        .then((json) => {
            const regex = new RegExp(`${data}`, "i");
            console.log("Coincidencias: ");
            $container.innerHTML = "";
            json.SMAE.forEach((v) => {
                if (regex.test(v.Alimento)) {
                    const $name = d.createElement("h1");
                    $name.innerText = `${v.Alimento}`;
                    $container.appendChild($name);
                }
            });
            d.querySelector("body").appendChild($container);
        });
});


