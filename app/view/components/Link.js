class Link extends Components {
    constructor(selector) {
        super(document.querySelector(selector))
    }
    onClick(callback) {
        this.container.onclick = callback
    }
}