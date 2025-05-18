

class Timer {
    constructor(hora = 0, minuto = 0, segundo = 0) {
        this.hora = hora
        this.minuto = minuto
        this.segundo = segundo
        this.parar = false
        this.intervalo = null
    }

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

    // Transforma segundo em minuto e minuto em hora
    verificarMinutoHora() {
        if (this.segundo >= 60) {
                this.segundo = 0
                this.minuto += 1
            }

        if (this.minuto >= 60) {
            this.minuto = 0
            this.hora += 1
        }
    }

    resetarTimer() {
        this.hora = 0
        this.minuto = 0
        this.segundo = 0
    }

    pararTimer() {
        this.parar = true
    }

}



const timer = new Timer()
timer.iniciarTimer()