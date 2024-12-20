class Header extends Components {
    constructor() {
        super(document.createElement('header'))

        this.container.className = 'header'


        const userName = new Paragraph
        userName.setClassName = 'post__author' // como exrtienden de components es setClass
        this.add(userName)

        try {
            var name = getUserName()

            userName.setText('Hello, ' + name + '!') // lo mismo de arriba es setText
        } catch (error) {
            alert(error.message)
        }
    }
}