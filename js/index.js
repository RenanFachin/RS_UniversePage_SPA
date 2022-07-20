import { Router } from './routes.js'

    const rotas = new Router()
    rotas.add("/", "/pages/home.html")
    rotas.add("/universe", "/pages/universe.html")
    rotas.add("/explore", "/pages/explore.html")
    rotas.add(404, "/pages/404.html")


    rotas.handle() // Apenas para iniciar já com a home Page inicializada
    
    //Para corrigir a navegação da página pelos botões de voltar    
    window.onpopstate = () => rotas.handle()

    // Colocando na "window" a função route
    window.route = () => rotas.route()


    // DEIXANDO O MENU COM ESTILO PARA QUANDO ESTIVER SELECIONADO
    const list = document.querySelectorAll('.list')

    function activeLink(){
        list.forEach((item)=>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    
    list.forEach((item)=>
    item.addEventListener('click',activeLink))
    