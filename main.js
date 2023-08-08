const casas = {
    "casa1": {"status": "", "player":""},
    "casa2": {"status": "", "player":""},
    "casa3": {"status": "", "player":""},
    "casa4": {"status": "", "player":""},
    "casa5": {"status": "", "player":""},
    "casa6": {"status": "", "player":""},
    "casa7": {"status": "", "player":""},
    "casa8": {"status": "", "player":""},
    "casa9": {"status": "", "player":""}
}
var jogadorAtual = ""

const trocarJogador = () => {
    if (jogadorAtual == "x") {
        jogadorAtual = "o"
    } else {
        jogadorAtual = "x"
    }
}

const resetarJogo = () => {
    casas.forEach(element => {
        element.status = ""
        element.player = ""
    });
}