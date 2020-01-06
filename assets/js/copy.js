function copyLink() {
    let link = document.getElementById('linktocopy')
    link.select();
    document.execCommand("copy");
    console.log("Copy to clipboard" + link.value)
  }