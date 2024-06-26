/*
* funcion que muestra la imagen de la cancion seleccionada por el usuario en el select "canción"
* @method Mostrarcancion
* @param {string} valor - Almacena el valor seleccionado por el usuario
* @return Ejecuta en el css, display: none o display: block, segun corresponda
* */
let Mostrarcancion = valor => {
    if (valor === "Fanky") {
        document.getElementById("imgSupersonic").style.display = 'none';
        document.getElementById("imgCyclone").style.display = 'none';
        document.getElementById("imgFanky").style.display = 'block';
    }
    if (valor === "Supersonic") {
        document.getElementById("imgFanky").style.display = 'none';
        document.getElementById("imgCyclone").style.display = 'none';
        document.getElementById("imgSupersonic").style.display = 'block';
    }
    if (valor === "Cyclone") {
        document.getElementById("imgFanky").style.display = 'none';
        document.getElementById("imgSupersonic").style.display = 'none';
        document.getElementById("imgCyclone").style.display = 'block';
    }

}
/*
* Funcion que muestra las imagenes de las canciones que corresponden con el género musical seleccionado por el usuario en el selector "genero"
* @method Mostrargenero
* @param {string} valor - Almacena el valor seleccionado por el usuario
* @return Ejecuta en el css, display: none o display: block, segun corresponda
* */


let Mostrargenero = valor => {
    if (valor === "rock") {
        document.getElementById("imgFanky").style.display = 'block';
        document.getElementById("imgSupersonic").style.display = 'block';
        document.getElementById("imgCyclone").style.display = 'none';
    }
    if (valor === "pop") {
        document.getElementById("imgFanky").style.display = 'none';
        document.getElementById("imgSupersonic").style.display = 'none';
        document.getElementById("imgCyclone").style.display = 'block';
    }
    if (valor === "reggae") {
        alert('NINGUNA CANCIÓN DE ESTE GENERO')
        document.getElementById("genero").value = "reggae";
        document.getElementById("imgFanky").style.display = 'none';
        document.getElementById("imgSupersonic").style.display = 'none';
        document.getElementById("imgCyclone").style.display = 'none';
    }
}

/*
* Funcion que muestra las imagenes de las canciones que corresponden con el artista buscado por el usuario en el intpu "artista"
* @method Mostrarartista
* @param {string} valor - Almacena el valor ingresado por el usuario
* @return Ejecuta en el css, display: none o display: block, segun corresponda
* */


let Mostrarartista = valor => {
    valor = valor.toLowerCase() //Funcion que transforma la cadena de texto en minuscula
    if (valor === "charly" || valor === "charly garcia") {
        document.getElementById("imgFanky").style.display = 'block';
        document.getElementById("imgSupersonic").style.display = 'none';
        document.getElementById("imgCyclone").style.display = 'none';
    } else if (valor === "oasis") {
        document.getElementById("imgFanky").style.display = 'none';
        document.getElementById("imgSupersonic").style.display = 'block';
        document.getElementById("imgCyclone").style.display = 'none';
    } else if (valor === "sticky" || valor === "sticky fingers") {
        document.getElementById("imgFanky").style.display = 'none';
        document.getElementById("imgSupersonic").style.display = 'none';
        document.getElementById("imgCyclone").style.display = 'block';
    } else {
        alert('No existen valores coincidentes con esa busqueda')
        document.getElementById("imgFanky").style.display = 'block';
        document.getElementById("imgSupersonic").style.display = 'block';
        document.getElementById("imgCyclone").style.display = 'block';
    }


}
/*
* Esta funcion genera el canva
* @method Mostrarcanva
* */


let Mostrarcanva = () => {
    const canva = document.getElementById("canvas");
    const ctx = canva.getContext("2d");
    const img = new Image();
    img.onload = function () { //funcion anonima que genera la imagen por completo
        const newWidth = canva.width; // le aplico a la imagen el mismo tamaño que el canva
        const newHeight = canva.height;
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
    };

    img.src = "imagenes/guitarra.png";
}