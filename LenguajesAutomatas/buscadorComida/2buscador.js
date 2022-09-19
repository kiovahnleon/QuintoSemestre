//en comnsola
fetch('smae_base_datos.json')
    .then((response) => response.json())
    .then((data) => {

        const datos = data.SMAE.filter((element) => /\bZanahoria\b/i.test(element.Alimento))

        datos.forEach((element) => console.log(element.Alimento))
    });

/*         const datos = data.SMAE.map(data => data.Alimento);
        const regexp = /(\w|\s)*Zanahoria(\w|\s)* /gi;
        let match;

        while ((match = regexp.exec(datos))) {
            console.log(match[0]);
        }
    }, []); */

