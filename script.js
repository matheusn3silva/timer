
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
        this.resetarTimer()
        
        this.intervalo = setInterval(() => {
            if (this.parar) {
                clearInterval(this.intervalo)
                return
            }

            this.segundo += 1
            this.verificarMinutoHora()

            console.log(`${this.hora.toString().padStart(2, '0')}:${this.minuto.toString().padStart(2, '0')}:${this.segundo.toString().padStart(2, '0')}`)
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

    // Reiniciar Timer  
    resetarTimer() {
        this.hora = 0
        this.minuto = 0
        this.segundo = 0
    }

    // Pausar Timer  
    pararTimer() {
        this.parar = true
    }

    // Continuar Timer
    continuarTimer() {
        this.parar = false
    }

}



const timer = new Timer()
timer.iniciarTimer()