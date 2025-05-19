
class Timer {
    constructor(hora = 0, minuto = 0, segundo = 0) {
        this.hora = hora
        this.minuto = minuto
        this.segundo = segundo
        this.parar = false
        this.intervalo = null
    }

    // Começar Timer
    iniciarTimer() {
        this.parar = false
        
        this.intervalo = setInterval(() => {
            if (this.parar) {
                clearInterval(this.intervalo)
                return
            }

            this.segundo += 1
            this.verificarMinutoHora()

            console.log(`${this.formatarTempo(this.hora)}:${this.formatarTempo(this.minuto)}:${this.formatarTempo(this.segundo)}`)
        }, 1000)
    }

    // Reiniciar Timer  
    resetarTimer() {
        this.hora = 0
        this.minuto = 0
        this.segundo = 0
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

    formatarTempo(valor) {
        return valor.toString().padStart(2, '0')
    }


}



const timer = new Timer()
timer.iniciarTimer()