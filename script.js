
//MENU MOBILE -------------------------------------------
function click_menu(){
    var menu = document.getElementById("menu_click");
    if(menu.style.display === "block"){
        menu.style.display = "none"
    }
    else{
        menu.style.display = "block"
    }
}

//SLIDESHOW NOTÍCIAS -------------------------------------
let contador = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    proximaImagem()
}, 4000)

function proximaImagem(){
    contador++;
    if(contador > 5){
        contador = 1;
    }
    document.getElementById("radio"+contador).checked = true;
}