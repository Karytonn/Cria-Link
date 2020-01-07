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
        const link = document.getElementById('linktocopy')
        // 1) Copy text
        await navigator.clipboard.writeText(link.value);
  
        // 2) Catch errors
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }