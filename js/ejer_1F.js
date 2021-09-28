// función para ver si es un número par o impar

let verificar = (numero) =>{
    let tipo = "";
    if (numero % 2 == 0){
        tipo = 'par';
    }else{
        tipo = 'impar';
    }

    document.write(`<br> El número ${numero} es ${tipo}`);
}

while(1){
    let cod = confirm("Press a button!");
    if (cod == false){
        break;
    }else{
        let valor = prompt('Ingrese un número entero');
        valor = parseInt(valor);
        if (!isNaN(valor)){
            verificar(valor);
        }else{
            alert('Número inválido')
        }
    }

}