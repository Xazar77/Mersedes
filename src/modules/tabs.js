const tabs = () => {

    const tabsContent = document.querySelectorAll('[data-tabs-field]')
    const tabsBtn = document.querySelectorAll('[data-tabs-handler]')



    tabsBtn.forEach((btn, index) => {

        btn.addEventListener('click', () => {
            tabsBtn.forEach(el => el.classList.remove('design-list__item_active'))
            btn.classList.add('design-list__item_active')
            
            tabsContent.forEach(content => {
                if(content.dataset.tabsField === btn.dataset.tabsHandler) {
                    content.classList.remove('hidden')
                } else {
                    content.classList.add('hidden')
                }
            })


        })
    })
}
export default tabs