// tabla de multiplicar

let tabla  = (numero) =>{
    for(let i=0; i<=12; i++){
        let total = numero * i;
        document.write(`<br> ${numero} * ${i} = ${total}`);
    }
}

let valor = 0;
while (1){
    valor = parseInt(prompt('Ingrese un número'));
    if (!isNaN(valor)){
        break;
    }else{
        alert('Número no válido');
    }
} 

tabla(valor);

