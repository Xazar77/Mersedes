import './index.html'
import './sass/style.sass'



import accordion from './modules/accordion'
import smoothscroll from './modules/smoothScroll'
import tabs from './modules/tabs'
import modal from './modules/modal'
import sendForm from './modules/sendForm'
import menu from './modules/menu'


accordion()
smoothscroll()
tabs()
modal()
sendForm('.modal__form')
sendForm('.form-test-drive')
menu()