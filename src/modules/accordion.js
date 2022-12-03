const accordion = () => {
    const btns = document.querySelectorAll('.feature__link ')
    const listItems = document.querySelectorAll('.feature-sub')

    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btns.forEach((el, id) =>{
                if(el === btn) {
                    el.classList.toggle('feature__link_active')
                    listItems[id].classList.toggle('hidden')
                }else {
                    el.classList.remove('feature__link_active')
                    listItems[id].classList.add('hidden')
                }

            })
        })
        
    })

}
export default accordion