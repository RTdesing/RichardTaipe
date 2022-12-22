

const maquina1 = document.getElementById('maquina-escribir1')

const maquinaEscribir1 = (text ='', tiempo = 300, etiqueta ='') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ''
    let i = 0
    let j =text.length
    let escribir = setInterval (function(){
        if (i === arrayCaracteres.length) {
            etiqueta.innerHTML = text.substring (0,j)
            j--
            if (j === 0) {
                i = 0
                etiqueta.innerHTML = ''
                j = text.length
            }
        } else {
        etiqueta.innerHTML += arrayCaracteres [i]
        i++
        
        }
    },tiempo)
}

    maquinaEscribir1 ("Diseñador Gráfico", 300, maquina1)
