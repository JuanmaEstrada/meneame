import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import NewArticle from './components/NewArticle.vue'
import Votaciones from './components/Votaciones.vue'
import Categorias from './components/Categorias.vue'
import Comentarios from './components/Comentarios.vue'


export const routes = [

{path:'/', component : Home, name:'homeLink',
					children :[
					{path:'/votaciones', component : Votaciones, name:'votacionesLink'},
					{path:'/categorias', component : Categorias, name:'categoriasLink'},
					{path:'/comentarios', component : Comentarios, name:'comentariosLink'},


					]
},

{path:'/login', component : Login, name:'loginLink'},
{path:'/register', component : Register, name:'registerLink'},
{path:'/new-article', component : NewArticle, name:'new-articleLink'},
{path:'/categorias', component : Categorias, name:'categoriasLink'},
{path:'*', redirect: '/'}
]
