// perímetro del rectángulo
let base = 0;
let altura = 0;
while (1){
    base = parseInt(prompt('Ingrese la base del rectángulo'));
    if (!isNaN(base)){
        break;
    }else{
        alert('Número no válido');
    }
}

while (1){
    altura = parseInt(prompt('Ingrese la altura del rectángulo'));
    if (!isNaN(altura)){
        break;
    }else{
        alert('Número no válido');
    }
}

let perimetro = 2 * (base + altura);

document.write(`El perímetro del rectángulo es: ${perimetro}`)