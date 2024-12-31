class Heading extends Components {
    constructor(level) {
        // super(document.createElement('h' + level))
        super(document.createElement(`h${level}`)) //JS6
    }

}