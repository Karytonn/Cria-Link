function getLink() {
    let inputnumber = document.querySelector('#inputnumber')
    let inputmessage = document.querySelector('#inputmessage')

    let linktocopy = document.querySelector('#linktocopy')

    let linkbase = "https://api.whatsapp.com/send?phone=55"


    let cellphone = Number(inputnumber.value)
    let message = inputmessage.value

    console.log(cellphone)

    
    linkbase += cellphone
    linkbase += message

    console.log(linkbase)

    linktocopy.innerHTML = linkbase


}

console.log("OK")

//https://api.whatsapp.com/send?phone=55629833232423&text=mensagem