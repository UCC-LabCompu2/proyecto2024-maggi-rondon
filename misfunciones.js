/**
 * funcion que muestra la imagen de la cancion seleccionada por el usuario en el select "canción"
 * @method Mostrarcancion
 * @param {string} valor - Almacena el valor seleccionado por el usuario
 * */
let Mostrarcancion = valor => {
    document.getElementById("genero").value = "";//ELIMINA LO ESCRITO EN GENERO
    document.getElementById("artista").value = ''; //ELIMINA LO DE ARTISTA
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
/**
 * Funcion que muestra las imagenes de las canciones que corresponden con el género musical seleccionado por el usuario en el selector "genero"
 * @method Mostrargenero
 * @param {string} valor - Almacena el valor seleccionado por el usuario
 * */


let Mostrargenero = valor => {
    document.getElementById("artista").value = ''; //ELIMINA LO DE ARTISTA
    document.getElementById("cancion").value="";//ELIMINA LO DE CANCION
    if (valor === "rock") {
        document.getElementById("imgFanky").style.display = 'block';
        document.getElementById("imgSupersonic").style.display = 'block';
        document.getElementById("imgCyclone").style.display = 'none';
    }
    if (valor === "reggae") {
        document.getElementById("artista").value="";//CON ESTO LIMPIO LAS OTRAS BUSQUEDAS
        document.getElementById("imgFanky").style.display = 'none';
        document.getElementById("imgSupersonic").style.display = 'none';
        document.getElementById("imgCyclone").style.display = 'block';
    }
    if (valor === "pop") {
        document.getElementById("artista").value="";//CON ESTO LIMPIO LAS OTRAS BUSQUEDAS
        alert('NINGUNA CANCIÓN DE ESTE GENERO')
        document.getElementById("genero").value = "";
        document.getElementById("imgFanky").style.display = 'none';
        document.getElementById("imgSupersonic").style.display = 'none';
        document.getElementById("imgCyclone").style.display = 'none';
    }
}

/**
 * Funcion que muestra las imagenes de las canciones que corresponden con el artista buscado por el usuario en el intpu "artista"
 * @method Mostrarartista
 * @param {string} valor - Almacena el valor ingresado por el usuario
 * */


let Mostrarartista = valor => {
    valor = valor.toLowerCase() //Funcion que transforma la cadena de texto en minuscula
    document.getElementById("cancion").value="";//ELIMINA LO DE CANCION
    document.getElementById("genero").value = "";//ELIMINA LO DE GENERO
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
        alert('No existen valores coincidentes con esa búsqueda')
        document.getElementById("imgFanky").style.display = 'block';
        document.getElementById("imgSupersonic").style.display = 'block';
        document.getElementById("imgCyclone").style.display = 'block';
        document.getElementById("artista").value = '';

    }


}
/**
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

/**
 * Esta funcion selecciona el acorde que pide mostrar el usuario
 * @method Mostraracorde
 * @param {string} valor - Almacena el valor seleccionado por el usuario
 */

let Mostraracorde = valor => {
    const canva = document.getElementById("canvaacorde");
    const ctx = canva.getContext("2d");
    const img = new Image();
    //YA NO SE MUESTRA MAS CON .STYLE

    if (valor === "A") {
        img.src = "imagenes/Achord.png";
    }  else if (valor === "C") {
        img.src = "imagenes/Cchord.png";
    } else if (valor === "D") {
        img.src = "imagenes/Dchord.png";
    } else if (valor === "E") {
        img.src = "imagenes/Echord.png";
    } else if (valor === "F") {
        img.src = "imagenes/Fchord.png";
    } else if (valor === "G") {
        img.src = "imagenes/Gchord.png";
    }
    canva.width = canva.width;
    img.onload = function () {
        const newWidth = canva.width;
        const newHeight = canva.height;
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
    };
}

/**
 * Esta funcion muestra el canva animado para las canciones
 * @method Canvaanimado
 * @param {string} valor - Almacena el ID del canva que se utiliza de acuerdo a la cancion
 */


x = 0;
dx = 100;

let Canvaanimado = (valor) => {
    const canva = document.getElementById(valor)
    const ctx = canva.getContext("2d");
    const img = new Image();
    canva.width = canva.width;
    if (valor==='canva_animado'){
        img.src = "imagenes/flecha1.png";
    }else if (valor==='canva_animado2'){
        img.src = "imagenes/flecha2.png";
    }
    img.onload = function () { //funcion anonima que genera la imagen por completo
        ctx.drawImage(img, x, 0, canva.width / 5, canva.height);
    };
    x += dx;
    if (x > canva.width) {
        x = 0;
    }
}

