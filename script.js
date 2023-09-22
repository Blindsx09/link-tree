function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
 
 
    //pegar tag img
    const img = document.querySelector("#profile img")
 
    //substituir a imagem
    if(html.classList.contains('light')){
    //se tiver lightmode add imagem light
    img.setAttribute('src', './assets/Avatar-light.png')
    img.setAttribute('alt', 'Foto de Fernando Cavalcante soorrindo com fundo escuro')
      
} else{
    //sem light mode , manter normal
    img.setAttribute('src', './assets/Avatar.png')
    img.setAttribute('alt', 'Foto Fernando Cavalcante com fundo claro')
}

}