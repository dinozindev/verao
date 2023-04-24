class Footer {
    constructor() {
        // seleciona o filtro Turbulence através de sua id filtro-turbulencia.
        this.filtroTurbulencia = document.getElementById('filtro-turbulencia')
    }

    efeitoOnda() {
        // cria uma animação através do TweenMax, em que alteramos a baseFrequency do filtro Turbulence acessando seus atributos através de attr, fazendo com que essa animação se repita em loop para sempre, dando um efeito de onda para o footer de Boa Viagem!.
        TweenMax.to(this.filtroTurbulencia, 20, {
            attr: {
               baseFrequency: 0.03 
            }, 
            repeat: -1, 
            yoyo: true
        })
    }
}

// exporta a class Footer para o script.js.
export { Footer }