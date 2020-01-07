// function copyLink() {
//     const link = document.getElementById('linktocopy')
//     link.focus()
//     link.select()

//     const isSucesseful = document.execCommand('copy')

//     if (!isSucesseful) {
//         console.error("[ERRO to copy Text.]")
//     }
    
//     console.log("Copy to clipboard: " + link.value)
//   } 

async function copyLink() {
    try {
        let link = document.getElementById('linktocopy')
            if(link.value.length > 0) {
                await navigator.clipboard.writeText(link.value);
            } else {
                alert("[ERRO] Primeiro gere um link!")
            }
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }