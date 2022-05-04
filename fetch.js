url=('')

fetch(url)
    .then(r => r.json())
    .then(dados => {
    console.log(dados)
})