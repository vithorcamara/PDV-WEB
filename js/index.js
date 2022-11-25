import {Router} from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add('/index.html', "/pages/home.html")
router.add("/vendas", "/pages/vendas.html")
router.add("/vendasclientes", "/pages/vendasclientes.html")
router.add("/vendashistorico", "/pages/vendashistorico.html")
router.add("/produtos", "/pages/produtos.html")
router.add("/compras", "/pages/compras.html")
router.add("/financeiro", "/pages/financeiro.html")
router.add("/meusdados", "/pages/meusdados.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route() //Código necessário para que a função route em index.html seja "enxergada" pelo script
