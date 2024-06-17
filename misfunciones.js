



let mostrarcancion=(valor)=>{
    if (valor==="Fanky"){
        document.getElementById("imgSupersonic").style.display='none'
        document.getElementById("imgCyclone").style.display='none'
        document.getElementById("imgFanky").style.display='block'
    }
     if (valor==="Supersonic"){
        document.getElementById("imgFanky").style.display='none'
        document.getElementById("imgCyclone").style.display='none'
         document.getElementById("imgSupersonic").style.display='block'
    }
    if (valor==="Cyclone"){
        document.getElementById("imgFanky").style.display='none'
        document.getElementById("imgSupersonic").style.display='none'
        document.getElementById("imgCyclone").style.display='block'
    }


}

let mostrargenero=(valor)=>{
    if (valor==="rock"){
        document.getElementById("imgFanky").style.display='block'
        document.getElementById("imgSupersonic").style.display='block'
        document.getElementById("imgCyclone").style.display='none'
    }
    if (valor==="pop"){
        document.getElementById("imgFanky").style.display='none'
        document.getElementById("imgSupersonic").style.display='none'
        document.getElementById("imgCyclone").style.display='block'
    }
    if (valor==="reggae"){
        alert('NINGUNA CANCIÓN DE ESTE GENERO')
        document.getElementById("genero").value=" "
    }

}
let mostrarartista=(valor)=>{
    if (valor==="charly"||valor==="Charly"||valor==="charly garcia"||valor==="Charly Garcia"||valor==="charly Garcia"){
        document.getElementById("imgFanky").style.display='block'
        document.getElementById("imgSupersonic").style.display='none'
        document.getElementById("imgCyclone").style.display='none'
    }
    else if (valor==="oasis"||valor==="Oasis"){
        document.getElementById("imgFanky").style.display='none'
        document.getElementById("imgSupersonic").style.display='block'
        document.getElementById("imgCyclone").style.display='none'
    }
    else if (valor==="sticky"||valor==="Sticky"||valor==="sticky fingers"||valor==="Sticky fingers"||valor==="Sticky Fingers"){
        document.getElementById("imgFanky").style.display='none'
        document.getElementById("imgSupersonic").style.display='none'
        document.getElementById("imgCyclone").style.display='block'
    }
    else if(valor===" "){
        document.getElementById("imgFanky").style.display='block'
        document.getElementById("imgSupersonic").style.display='block'
        document.getElementById("imgCyclone").style.display='block'
    }
    else{
        alert('El artista no se encuentra en nuestras bibliotecas o intente de otra forma')
    }



}