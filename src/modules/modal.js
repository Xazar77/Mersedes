const modal = () => {
    const modalBtn = document.querySelectorAll('.more')
    
    const modal = document.querySelector('.modal')
  


    modalBtn.forEach(btn => { 
        btn.addEventListener('click', () => {
            modal.classList.remove('hidden')
        })
        
    })

    modal.addEventListener('click', (e) => {

        if(e.target.matches('.modal__close') || e.target.matches('.overlay')){
            modal.classList.add('hidden')
        }
    })

    
}

export default modal