class Footer extends Components {
    constructor() {
        super(document.createElement('footer'))

        this.container.className = 'footer'


        const userName = new Paragraph
        userName.setClassName = 'hello__User ' // como exrtienden de components es setClass
        this.add(userName)

        try {
            var name = getUserName()

            userName.setText('Hello, ' + name + '!') // lo mismo de arriba es setText
        } catch (error) {
            alert(error.message)
        }
    }
}