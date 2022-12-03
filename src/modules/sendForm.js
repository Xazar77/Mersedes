const sendForm = (selector) => {
    const form = document.querySelector(selector)

    let isError;
    // console.log(forms)

    const validInput = () => {
        isError = false
        const lists = form.querySelectorAll('input')
        lists.forEach(list => {
            let value = list.value.trim()
            if(value === '') {
                isError = true
            }
        })

        return isError
    }
    

    const sendData = (data) => {

        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })

            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    res.json()
                } else {
                    throw new Error(res.status)
                }
            })
            .then(data => {
                alert('Данные успешно отправлены!')

            })
            .catch(error => console.log('Произошла ошибка ' + error.message))
    }



    const collectionData = (form) => {


        const formData = new FormData(form)

        const formBody = {}

        formData.forEach((value, key) => {

            formBody[key] = value

        })

        if(!validInput()) {
            sendData(formBody)
        }
       
        
        
          
    }

    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        collectionData(form)
        if(!validInput()) {
            form.reset()
        }
        
    })
   


}

export default sendForm


//'http://jsonplaceholder.typicode.com/posts'