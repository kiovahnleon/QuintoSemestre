
fetch(smae_base_datos.json)
    .then((response) => response.json())
    .then((json) => {

        console.log(json)

        const datos = comida.SMAE.filter((element) => /\bnaranja\b/i.test(element.Alimento))

        datos.forEach((element) => console.log(element.Alimento))

    });