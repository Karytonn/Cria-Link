async function copyLink() {
    try {
        const link = document.getElementById('link')
            if(link.value.length > 0) {
                await navigator.clipboard.writeText(link.value);
            } else {
                alert("[ERRO] Primeiro gere um link!")
            }
        } catch (error) {
            console.error('Failed to copy: ', error);
        }
    }