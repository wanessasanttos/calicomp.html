
//MENU MOBILE -------------------------------------------
function click_menu(){
    let menu = document.getElementById("menu_click");
    if(menu.style.display === "block"){
        menu.style.display = "none"
    }
    else{
        menu.style.display = "block"
    }
}

//SLIDESHOW NOTÍCIAS -------------------------------------
if(window.location.pathname.includes('/index.html') || window.location.pathname.includes('/calicomp.vercel.app')){ //verifica se é a página inicial
    let contador = 1;

    document.getElementById("radio1").checked = true;
    
    setInterval(function(){
        proximaImagem()
    }, 7000)
    
    function proximaImagem(){
        contador++;
        if(contador > 5){
            contador = 1;
        }
        document.getElementById("radio"+contador).checked = true;
    }
    function antecederImagem(){
        contador--;
        if(contador < 1){
            contador = 5;
        }
        document.getElementById("radio"+contador).checked = true;
    }   
}

//MEMBROS - CLIQUE PARA DETALHES -------------------------------------
function destacarPerfil(ID){                                               
    let destaque = document.getElementById(ID)
    destaque.style.display = "flex"
}

function retirarDestaque(ID){
    let destaque = document.getElementById(ID)
    if(destaque.style.display === "flex"){
        destaque.style.display = "none"
    }
}