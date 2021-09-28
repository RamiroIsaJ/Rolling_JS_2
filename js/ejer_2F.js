// verficar en cadenas mayúsculas o minúsculas

let verificarM = (cadena) => {
    let i = 0;
    let c_mayus = 0;
    let c_minus = 0;
    let c_num = 0;
    let c_esp = 0;
    while (i < cadena.length){
        let caracter = cadena[i];
        let caracter_ = parseInt(caracter);
        if (!isNaN(caracter_)){
            c_num++;
        }else{
            if (caracter == ' '){
                c_esp++;
            }else if(caracter == caracter.toUpperCase()){
                c_mayus++;
            }else if (caracter == caracter.toLowerCase()){
                c_minus++;
            }
        }
        i++;
    }

    let caracterValido = cadena.length - c_num - c_esp;

    if (c_mayus == caracterValido){
        document.write(`<br> Hay solo letras mayúsculas ingresadas. Total: ${c_mayus}`);
    } else if (c_minus == caracterValido){
        document.write(`<br> Hay solo letras minúsculas ingresadas. Total: ${c_minus}`);
    } else if (c_minus > 0 && c_mayus > 0){
        document.write(`<br> Hay  ${c_minus} letras minúsculas y ${c_mayus} mayúsculas ingresadas`);
    }else{
        document.write(`Se han ingresado solo números.Total ${c_num}`)
    }
}


let cadenaP = prompt('Ingrese una frase o cadena');
verificarM(cadenaP);