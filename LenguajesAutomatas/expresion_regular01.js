const cadena = 'Mi nombre es Camila y tengo 20'

const regexp = /nombre es ([a-zA-Z]+)/
const match = regexp.exec(cadena)

if (match) {
    const name = match[1]
    console.log(name);
} else {
    console.log('No match...');
}

console.log(match);