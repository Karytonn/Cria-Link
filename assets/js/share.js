function shareLink() {
	
	let link = document.getElementById('link')
	link.value.length > 0 ? share(link) : alert("[ERRO] Primeiro gere um link!")

}

function share(linkToshare){
	if (navigator.share !== undefined) {
        console.log("share")
        navigator.share({
        	title: 'Whatsapp link',
        	url: linkToshare.value
        }).then(() => {
        	console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
    	alert("Navegador sem suporte a compartilhamento! Utilize a função Copy.")
		console.log("Navigator without native Web Share API")	  
    }
}