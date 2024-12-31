class Form extends Components {
    constructor(selector) {
        super(selector ? document.querySelector(selector) : document.createElement('form')) // si hay un form en el dom lo busco con el selector, si no lo hay lo creo 
    }
    onSubmit(callback) {
        this.container.onsubmit = callback
    }
}