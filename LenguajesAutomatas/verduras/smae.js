/**
 * En esta práctica deberás leer un archivo JSON y extraer todas las coincidencias de verduras 
 * que se encuentren dentro de él.
 * ! Deberás leer el archivo JSON
 * ! Obtener la información para después con una expresión regular filtrar los datos
 * ! Mostrar los datos en pantalla
 */

const SMAE = [
  {
    Alimento: "Acelga cruda",
    Categoría: "Verduras",
    Cantidad: "2    ",
    Unidad: "taza",
    PesoBrutoG: "120",
    PesoNetoG: "98",
    EnergiaKcal: "22",
    Proteina: "2.2",
    Lipidos: "0.1",
    Carbohidratos: "4.3",
    Fibra: "3.6",
    VitaminaAug: "310.9",
    AcidoAscorbicomg: "29.5",
    AcidoFolicoug: "14.8",
    Hierromg: "2.5",
    Potasiomg: "0",
    IG: "64.0",
    IC: "2.7",
    AzucarPorEquivalenteG: "0",
    Calciomg: "0",
    Sodiomg: "0",
    Forforomg: "0",
    Selenioug: "0",
    Colesterolmg: "0",
    GrasaSaturadag: "0",
    GrasaMonoinsaturadag: "0",
    GrasaPoliinsaturadag: "0",
    Etanolg: "0",
  },
  {
    Alimento: "Acelga picada cocida",
    Categoría: "Verduras",
    Cantidad: " 0.5",
    Unidad: "taza",
    PesoBrutoG: "72",
    PesoNetoG: "72",
    EnergiaKcal: "19",
    Proteina: "1.9",
    Lipidos: "0.1",
    Carbohidratos: "3.9",
    Fibra: "2.1",
    VitaminaAug: "275.8",
    AcidoAscorbicomg: "17.9",
    AcidoFolicoug: "10.1",
    Hierromg: "1.4",
    Potasiomg: "0",
    IG: "64.0",
    IC: "2.5",
    AzucarPorEquivalenteG: "0",
    Calciomg: "0",
    Sodiomg: "0",
    Forforomg: "0",
    Selenioug: "0",
    Colesterolmg: "0",
    GrasaSaturadag: "0",
    GrasaMonoinsaturadag: "0",
    GrasaPoliinsaturadag: "0",
    Etanolg: "0",
  },
  {
    Alimento: "Alcachofa mediana cocida",
    Categoría: "Verduras",
    Cantidad: "1    ",
    Unidad: "pieza",
    PesoBrutoG: "120",
    PesoNetoG: "48",
    EnergiaKcal: "25",
    Proteina: "1.4",
    Lipidos: "0.2",
    Carbohidratos: "5.7",
    Fibra: "4.1",
    VitaminaAug: "0.5",
    AcidoAscorbicomg: "3.6",
    AcidoFolicoug: "42.7",
    Hierromg: "0.3",
    Potasiomg: "0",
    IG: "0",
    IC: "0",
    AzucarPorEquivalenteG: "0",
    Calciomg: "0",
    Sodiomg: "0",
    Forforomg: "0",
    Selenioug: "0",
    Colesterolmg: "0",
    GrasaSaturadag: "0",
    GrasaMonoinsaturadag: "0",
    GrasaPoliinsaturadag: "0",
    Etanolg: "0",
  },
  {
    Alimento: "Apio cocido",
    Categoría: "Verduras",
    Cantidad: " 0.75",
    Unidad: "taza",
    PesoBrutoG: "113",
    PesoNetoG: "113",
    EnergiaKcal: "20",
    Proteina: "0.9",
    Lipidos: "0.2",
    Carbohidratos: "4.5",
    Fibra: "1.8",
    VitaminaAug: "29.3",
    AcidoAscorbicomg: "6.9",
    AcidoFolicoug: "24.8",
    Hierromg: "0.5",
    Potasiomg: "0",
    IG: "0",
    IC: "0",
    AzucarPorEquivalenteG: "0",
    Calciomg: "0",
    Sodiomg: "0",
    Forforomg: "0",
    Selenioug: "0",
    Colesterolmg: "0",
    GrasaSaturadag: "0",
    GrasaMonoinsaturadag: "0",
    GrasaPoliinsaturadag: "0",
    Etanolg: "0",
  },
  {
    Alimento: "Apio crudo",
    Categoría: "Verduras",
    Cantidad: "1.5",
    Unidad: "taza",
    PesoBrutoG: "152",
    PesoNetoG: "135",
    EnergiaKcal: "22",
    Proteina: "0.9",
    Lipidos: "0.2",
    Carbohidratos: "4.0",
    Fibra: "2.5",
    VitaminaAug: "29.7",
    AcidoAscorbicomg: "4.2",
    AcidoFolicoug: "48.5",
    Hierromg: "0.3",
    Potasiomg: "0",
    IG: "0",
    IC: "0",
    AzucarPorEquivalenteG: "0",
    Calciomg: "0",
    Sodiomg: "0",
    Forforomg: "0",
    Selenioug: "0",
    Colesterolmg: "0",
    GrasaSaturadag: "0",
    GrasaMonoinsaturadag: "0",
    GrasaPoliinsaturadag: "0",
    Etanolg: "0",
  },
  {
    Alimento: "Arúgula, cruda",
    Categoría: "Verduras",
    Cantidad: "4    ",
    Unidad: "taza",
    PesoBrutoG: "80",
    PesoNetoG: "80",
    EnergiaKcal: "20",
    Proteina: "2.1",
    Lipidos: "0.5",
    Carbohidratos: "2.9",
    Fibra: "3.5",
    VitaminaAug: "95.2",
    AcidoAscorbicomg: "12.0",
    AcidoFolicoug: "77.6",
    Hierromg: "1.2",
    Potasiomg: "0",
    IG: "0",
    IC: "0",
    AzucarPorEquivalenteG: "0",
    Calciomg: "0",
    Sodiomg: "0",
    Forforomg: "0",
    Selenioug: "0",
    Colesterolmg: "0",
    GrasaSaturadag: "0",
    GrasaMonoinsaturadag: "0",
    GrasaPoliinsaturadag: "0",
    Etanolg: "0",
  },
  {
    Alimento: "Berenjena picada cocida",
    Categoría: "Verduras",
    Cantidad: "1    ",
    Unidad: "taza",
    PesoBrutoG: "99",
    PesoNetoG: "99",
    EnergiaKcal: "35",
    Proteina: "0.8",
    Lipidos: "0.2",
    Carbohidratos: "8.6",
    Fibra: "2.5",
    VitaminaAug: "2.0",
    AcidoAscorbicomg: "1.3",
    AcidoFolicoug: "13.9",
    Hierromg: "0.4",
    Potasiomg: "0",
    IG: "0",
    IC: "0",
    AzucarPorEquivalenteG: "0",
    Calciomg: "0",
    Sodiomg: "0",
    Forforomg: "0",
    Selenioug: "0",
    Colesterolmg: "0",
    GrasaSaturadag: "0",
    GrasaMonoinsaturadag: "0",
    GrasaPoliinsaturadag: "0",
    Etanolg: "0",
  },
  {
    Alimento: "Berro crudo",
    Categoría: "Verduras",
    Cantidad: "2    ",
    Unidad: "taza",
    PesoBrutoG: "68",
    PesoNetoG: "56",
    EnergiaKcal: "34",
    Proteina: "1.3",
    Lipidos: "0.1",
    Carbohidratos: "0.7",
    Fibra: "0.3",
    VitaminaAug: "46.3",
    AcidoAscorbicomg: "6.7",
    AcidoFolicoug: "35.7",
    Hierromg: "1.2",
    Potasiomg: "0",
    IG: "0",
    IC: "0",
    AzucarPorEquivalenteG: "0",
    Calciomg: "0",
    Sodiomg: "0",
    Forforomg: "0",
    Selenioug: "0",
    Colesterolmg: "0",
    GrasaSaturadag: "0",
    GrasaMonoinsaturadag: "0",
    GrasaPoliinsaturadag: "0",
    Etanolg: "0",
  },
  {
    Alimento: "Manzana",
    Categoría: "Fruta",
    Cantidad: "2    ",
    Unidad: "taza",
    PesoBrutoG: "68",
    PesoNetoG: "56",
    EnergiaKcal: "34",
    Proteina: "1.3",
    Lipidos: "0.1",
    Carbohidratos: "0.7",
    Fibra: "0.3",
    VitaminaAug: "46.3",
    AcidoAscorbicomg: "6.7",
    AcidoFolicoug: "35.7",
    Hierromg: "1.2",
    Potasiomg: "0",
    IG: "0",
    IC: "0",
    AzucarPorEquivalenteG: "0",
    Calciomg: "0",
    Sodiomg: "0",
    Forforomg: "0",
    Selenioug: "0",
    Colesterolmg: "0",
    GrasaSaturadag: "0",
    GrasaMonoinsaturadag: "0",
    GrasaPoliinsaturadag: "0",
    Etanolg: "0",
  },
];

const verduras = SMAE.filter((element) => /Verduras/.test(element.Categoría))

verduras.forEach((element) => console.log(element.Alimento))