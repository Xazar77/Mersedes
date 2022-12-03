const menu = () => {
    const menuBtn = document.querySelector('.humburger-menu')
    const menu = document.querySelector('.menu')

    const toggleMenu = () => {
        menuBtn.classList.toggle('humburger-menu-active')
        menu.classList.toggle('menu-active')        
    }

    menuBtn.addEventListener('click', toggleMenu)

}
export default menu