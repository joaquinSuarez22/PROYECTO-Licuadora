var estadoLicuadora = "OFF";
var sonidoLicuadora = document.getElementById("blender-sounds");
var botonLicuadora = document.getElementById("blender-button-sounds");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if(estadoLicuadora == "OFF") {
     estadoLicuadora = "ON";
     hacerBrr();
     licuadora.classList.add("active");
     /* console.log("me prendiste"); */
    }else {
        estadoLicuadora = "OFF"
        hacerBrr();
        licuadora.classList.remove("active")
        /* console.log("me apagaste"); */
 }
}

function hacerBrr() {

    if( sonidoLicuadora.paused ) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else{
       botonLicuadora.play();
       sonidoLicuadora.pause();
       sonidoLicuadora.currentTime = 0;
    }
}

