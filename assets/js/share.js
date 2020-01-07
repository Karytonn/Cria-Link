function shareLink() {
    let link = document.getElementById('linktocopy')

    if (navigator.share !== undefined && link.value.length > 0 ) {
        console.log("share")
        navigator.share({
          title: 'Whatsapp link',
          url: link.value
        }).then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(console.error);
      } else {
        alert("[ERRO] Primeiro gere um link!")
      }

}