class Form extends Components {
    constructor(selector) {
        super(document.querySelector(selector))
    }
    onSubmit(callback) {
        this.container.onsubmit = callback
    }
}