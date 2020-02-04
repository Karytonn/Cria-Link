function getLink() {
    let inputnumber = document.querySelector('#inputnumber')
    let inputmessage = document.querySelector('#inputmessage')
    let linktocopy = document.querySelector('#link')

    let cellphone = Number(inputnumber.value)
    let message = inputmessage.value.replace(/\s+/g,"%20")

    console.log(`resplace space ${message}`)

    if(inputnumber.value.length < 11 || inputmessage.value.length <= 0 ) {
        alert("[ERRO] Insira dados válidos!")
    } else {     
       linktocopy.value = `https://api.whatsapp.com/send?phone=55${cellphone}&text=${message}`
       linktocopy.enable
       inputnumber.value = ''
       inputmessage.value = ''
    }
}