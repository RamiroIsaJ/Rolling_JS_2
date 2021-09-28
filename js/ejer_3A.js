// simular lanzamiento de 2 dados

let dado = (min, max) => {
    return  Math.round(min + Math.random() * (max - min));
} 

let valores = []
for (let i=1; i<=50; i++){
    document.write("<br> Lanzamiento número: " + i);
    let val1 = dado(1, 6);
    let val2 = dado(1, 6);
    let sumaVal = val1 + val2;
    valores.push(sumaVal)
}

document.write("<br> Los valores almacenados:  " + valores);