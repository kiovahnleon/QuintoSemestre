const cadena = 'Mi nombre es Camila y tengo 18 años'

const regexp = /nombre es ([A-z][a-z]{1,11}\b) y tengo ([1-9]?[0-9][0-9])*/

const match = regexp.exec(cadena)

if (match) {
    const name = match[1]
    const edad = match[2]
    console.log('\nTu nombre es: ' + name);
    if (edad >= 18) {
        console.log('Tu edad es de ' + edad + ', eres mayor de edad\n');
    }
    else {
        console.log('Eres menor de edad\n');
    }
} 
