
class Timer {
    constructor(hora = 0, minuto = 0, segundo = 0) {
        this.hora = hora
        this.minuto = minuto
        this.segundo = segundo
        this.intervalo = null
        this.display = document.getElementById('tempo')
    }

    // Começar Timer
    iniciarTimer() {        
        if (this.intervalo) return // Evita múltiplos timers

        this.intervalo = setInterval(() => {
            this.segundo += 1
            this.verificarMinutoHora()
            this.atualizaDisplay()
        }, 1000)
    }

    verificarMinutoHora() {

        // Transforma 60 segundo em 1 minuto  
        if (this.segundo >= 60) {
                this.segundo = 0
                this.minuto += 1
            }

        // Transforma 60 minutos em 1 hora 
        if (this.minuto >= 60) {
            this.minuto = 0
            this.hora += 1
        }
    }

    // Formata o tempo do display
    formatarTempo(valor) {
        return valor.toString().padStart(2, '0')
    }

    // Atualiza o display para mostrar o tempo atual
    atualizaDisplay() {
        this.display.textContent = `${this.formatarTempo(this.hora)}:${this.formatarTempo(this.minuto)}:${this.formatarTempo(this.segundo)}`
    }

    // Reiniciar Timer  
    resetarTimer() {
        this.hora = 0
        this.minuto = 0
        this.segundo = 0
        this.atualizaDisplay()
        this.pararTimer()
    }

    // Finalizar Timer
    finalizarTimer() {
        if (!this.segundo == 0) {
            historico.adicionarItem(this.display.textContent)
            this.resetarTimer()
        }
    }

    // Pausar Timer  
    pararTimer() {
        clearInterval(this.intervalo)
        this.intervalo = null
    }

}

// ====== Histórico ======

class Historico {
    constructor() {
        this.id = 0
        this.history = document.getElementById('box-history')
        this.msgHistoryEmpty = document.getElementById('msg-historico-vazio')
    }

    atualizaMsgHistoricoVazio() {
        const itens = this.history.querySelectorAll('.item')

        if (itens.length == 0) {
            this.msgHistoryEmpty.style.display = 'block'
        } else {
            this.msgHistoryEmpty.style.display = 'none'
        }
    }

    adicionarItem(tempo){
        const item = document.createElement('div')
        item.classList.add('item', 'fade-in')
        item.setAttribute('id', `${this.id}`)

        item.innerHTML = `
            <div class="item-valor">${tempo}</div>
            <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
        `

        this.history.appendChild(item)

        item.querySelector('.btn-delete').addEventListener('click', () => {
            this.removerItem(item.id)
        })

        setInterval(() => {
            item.classList.remove('fade-in')
        }, 301)

        this.id += 1

        this.atualizaMsgHistoricoVazio()
    }

    removerItem(id) {
        const item = document.getElementById(id)

        if (item) {
            item.classList.add('fade-out')

            setTimeout(() => {
                this.history.removeChild(item) 
                this.atualizaMsgHistoricoVazio() 
            }, 300);
        }
    }
}

// ====== Controle dos Botões ======

const timer = new Timer()
const historico = new Historico()

document.getElementById("btn-iniciar").addEventListener("click", () => {
    timer.iniciarTimer()
})

document.getElementById("btn-pausar").addEventListener("click", () => {
    timer.pararTimer()
})

document.getElementById("btn-resetar").addEventListener("click", () => {
    timer.resetarTimer()
})

document.getElementById("btn-finalizar").addEventListener("click", () => {
    timer.finalizarTimer()
})


