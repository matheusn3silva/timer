
class Timer {
    constructor(hora = 0, minuto = 0, segundo = 0) {
        this.hora = hora
        this.minuto = minuto
        this.segundo = segundo
        this.parar = false
        this.intervalo = null
        this.display = document.getElementById('tempo')
    }

    // Começar Timer
    iniciarTimer() {
        this.parar = false
        
        if (this.intervalo) return // Evita múltiplos timers

        this.intervalo = setInterval(() => {
            if (this.parar) {
                clearInterval(this.intervalo)
                this.intervalo = null
                return
            }

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
    }

    // Finalizar Timer
    finalizarTimer() {
        clearInterval(this.intervalo)
        this.intervalo = null
        this.resetarTimer()
        this.parar = true
    }

    // Pausar Timer  
    pausarTimer() {
        this.parar = true
    }

    // Continuar Timer
    continuarTimer() {
        this.parar = false

        if (!this.intervalo) {
            this.iniciarTimer()
        }
    }


}

// ====== Controle dos Botões ======

const timer = new Timer()

document.getElementById("btn-iniciar").addEventListener("click", () => {
    timer.iniciarTimer()
})

document.getElementById("btn-pausar").addEventListener("click", () => {
    timer.pausarTimer()
})

document.getElementById("btn-continuar").addEventListener("click", () => {
    timer.continuarTimer()
})

document.getElementById("btn-resetar").addEventListener("click", () => {
    timer.resetarTimer()
})

document.getElementById("btn-finalizar").addEventListener("click", () => {
    timer.finalizarTimer()
})