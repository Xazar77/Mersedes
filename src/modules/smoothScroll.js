const smoothScroll = () => {

    const linkItems = document.querySelectorAll('.menu-list__link')
    const mainScroll = document.querySelector('.main__scroll')
    const menu = document.querySelector('.menu')
    const menuBtn = document.querySelector('.humburger-menu')

    const newArr = [...linkItems, mainScroll]

    newArr.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()

            const id = e.target.getAttribute('href').substring(1)
            document.getElementById(id).scrollIntoView({
                behavior: "smooth",
                block: "start",
            })

            menu.classList.remove('menu-active')
            menuBtn.classList.remove('humburger-menu-active')
        })
    })

}
export default smoothScroll