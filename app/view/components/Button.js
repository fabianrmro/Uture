class Button extends Components {
    constructor() {
        super(document.createElement('button'))
    }

    onClick(callback) {
        this.container.onclick = callback
    }
}
