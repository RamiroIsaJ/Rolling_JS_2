// Ingresar ciudades
let ciudades = [];

let printCiudad = (ciudades_) => {
    document.write("<br> Las ciudades ingresadas son: " + ciudades_);
    document.write("<br> El número de ciudades ingresadas: " + ciudades_.length);
    if (ciudades_.length > 3){
        document.write("<br> La 3ra ciudad ingresada es : " + ciudades_[2]);
        document.write("<br> La 2da ciudad ingresada es : " + ciudades_[1]);
        ciudades_[1] = 'Quito';
        document.write("<br> La 2da ciudad ingresada es : " + ciudades_[1]);
    }
}

while (1){
    let cod = confirm("Press a button!");
    if (cod == false){
        printCiudad(ciudades);
        break;
    }
    else{
        let ciudad = prompt('Ingrese una nueva ciudad');
        let ciudad_ = parseInt(ciudad);
        if (isNaN(ciudad_)){
            ciudades.push(ciudad)
        }else{
            if(ciudad_ == 0){
                printCiudad(ciudades);
                break;
            }        
        }     
    }
}
