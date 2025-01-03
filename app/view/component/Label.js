class Label extends Component {
    constructor() {
        super(document.createElement('label'))
    }

    setFor(id) {
        // editCaptionLabel.htmlFor = 'edit-caption-input' (esto es un ID)
        this.container.htmlFor = id
    }

    getFor() {
        return this.container.htmlFor
    }
}