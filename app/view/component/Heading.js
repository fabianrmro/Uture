class Heading extends Component {
    constructor(level) {
        // super(document.createElement('h' + level))
        super(document.createElement(`h${level}`)) //JS6
    }

}