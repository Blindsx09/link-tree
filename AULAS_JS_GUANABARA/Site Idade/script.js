function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert ('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 5){
                //bebe
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade >= 5 && idade <11){
                //criança
                img.setAttribute('src','crianca-m.png')
            }else if (idade < 23){
                //adolescente
                img.setAttribute('src','jovem-m.png')
            } else if (idade <45){
                //adulto
                img.setAttribute('src','adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src','idoso-m.png')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 5){
                //bebe
                img.setAttribute('src','bebe-f.png')
            } else if (idade >= 5 && idade <11){
                //criança
                img.setAttribute('src','crianca-f.png')
            }else if (idade < 23){
                //adolescente
                img.setAttribute('src','jovem-f.png')
            } else if (idade <45){
                //adulto
                img.setAttribute('src','adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src','idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        if (idade <= 1){
        res.innerHTML = `Detectamos: ${genero} com ${idade} ano.`
        }else {
            res.innerHTML = `Detectamos:  ${genero} com ${idade} anos.`
        }   res.appendChild(img)
    }
}
