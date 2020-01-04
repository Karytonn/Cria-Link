function getLink() {
    let inputnumber = document.querySelector('#inputnumber')
    let inputmessage = document.querySelector('#inputmessage')

    let linktocopy = document.querySelector('#linktocopy')

    let cellphone = Number(inputnumber.value)
    let message = inputmessage.value

    linktocopy.value = `https://api.whatsapp.com/send?phone=55${cellphone}&text=${message}`
    

}

