class Image extends Components {
    constructor() {
        super(document.createElement('img'))
    }

    setUrl(url) {
        this.container.src = url
    }
}