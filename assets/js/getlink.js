function getLink() {
    let inputnumber = document.querySelector('#inputnumber')
    let inputmessage = document.querySelector('#inputmessage')
    let linktocopy = document.querySelector('#linktocopy')

    let cellphone = Number(inputnumber.value)
    let message = inputmessage.value

    if(inputnumber.value.length < 11 || inputmessage.value.length <= 0 ) {
        alert("[ERRO] Insira dados válidos!")
    } else {     
       linktocopy.value = `https://api.whatsapp.com/send?phone=55${cellphone}&text=${message}`
       linktocopy.enable
    }

}

function copyLink() {
    let link = document.getElementById('linktocopy')
    link.select();
    document.execCommand("copy");
    console.log("Copy to clipboard" + link.value)
  }