
//MENU MOBILE -------------------------------------------
function click_menu(){
    let menu = document.getElementById("menu_click");
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }
}

//SLIDESHOW NOTÍCIAS -------------------------------------
if(window.location.pathname.includes('/index.html') || window.location.hostname.includes('calicomp.vercel.app')){ //verifica se é a página inicial
    let contador = 1;

    document.getElementById("radio1").checked = true;
    
    setInterval(function(){
        iniciarShideshow()
    }, 7000)
    
    function iniciarShideshow(){
        contador++;
        if(contador > 5){
            contador = 1;
        }
        document.getElementById("radio"+contador).checked = true;
    }
    function resetarTime(){
        clearInterval(intervalID);
        iniciarShideshow();
    }

    function proximaImagem(){
        contador++;
        if(contador > 5){
            contador = 1;
        }
        document.getElementById("radio"+contador).checked = true;
        resetarTime();
    }
    function antecederImagem(){
        contador--;
        if(contador < 1){
            contador = 5;
        }
        document.getElementById("radio"+contador).checked = true;
        resetarTime();
    }   
}

//MEMBROS - CLIQUE PARA DETALHES -------------------------------------
function destacarPerfil(ID){                                               
    let destaque = document.getElementById(ID);
    destaque.style.display = "flex";
}

function retirarDestaque(ID){
    let destaque = document.getElementById(ID);
    if(destaque.style.display === "flex"){
        destaque.style.display = "none";
    }
}

//EVENTOS - CLIQUE PARA DETALHES -------------------------------------
function destacarEvento(ID){                                               
    let destaque = document.getElementById(ID);
    destaque.style.display = "flex";
}

function retirarDestaqueEvento(ID){
    let destaque = document.getElementById(ID);
    if(destaque.style.display === "flex"){
        destaque.style.display = "none";
    }
}

function botaoVoltar(ID){
    let destaque = document.getElementById(ID);
    if(destaque.style.display === "flex"){
        destaque.style.display = "none";
    }
}

//EVENTOS - BOTAO HISTORICO -------------------------------------
function historico(){
    window.location.href = 'historico.html'
}

//EVENTOS - BOTAO PROXIMOS EVENTOS -------------------------------------
function eventos(){
    window.location.href = 'eventos.html'
}