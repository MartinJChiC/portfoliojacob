// FUNCTION STYLE MENU 
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado"; 
    
    //We will make dissapear the menu once we select an opcion in the responsive mode
    var x = document.getElementById("nav");
    x.className = "";
}


// FUNCTION THAT SHOW REPONSIVE MENU
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className ==="") {
        x.className = "responsive";
    }else{
        x.className = "";
    }    
}

//I detect the scrolling for apply the animation from the habilities bar
window.onscroll = function(){
    efectoHabilidades();
};

//Function that apply the animation from the habilities bar
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}

function agregarEvento(id, url) {
    var imagen = document.getElementById(id);
    imagen.addEventListener("click", function() {
        window.open(url, "_blank");
    });
}

agregarEvento("miImagen", "https://vigolimpieza.com/");
agregarEvento("miImagen2", "https://martinjchic.github.io/websitedemo/");
agregarEvento("miImagen3", "https://martinjchic.github.io/WebsiteParticles/");
agregarEvento("miImagen4", "https://martinjchic.github.io/menu/#");
agregarEvento("miImagen5", "https://martinjchic.github.io/sidebar/");
agregarEvento("miImagen6", "https://martinjchic.github.io/programajs10/");
agregarEvento("miImagen7", "https://martinjchic.github.io/seccionpreguntasyrepuestas/");
agregarEvento("miImagen8", "https://martinjchic.github.io/productgallery/");
agregarEvento("miImagen9", "https://martinjchic.github.io/weatherappjacob/");









