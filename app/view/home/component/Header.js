class Header extends Component {
    constructor() {
        super(document.createElement('header'))

        this.container.className = 'header'


        const userName = new Paragraph
        userName.setClassName = 'hello__User ' // como exrtienden de  es setClass
        this.add(userName)

        try {
            var name = logic.getUserName()

            userName.setText('Hello, ' + name + '!') // lo mismo de arriba es setText
        } catch (error) {
            alert(error.message)
        }

        const logoutButton = new Button
        logoutButton.setClassName('form__button')
        logoutButton.setText('Log Out')
        this.add(logoutButton)

        logoutButton.onClick(function () {
            try {
                logic.logoutUser()

                location.href = '../login '
            } catch (error) {
                alert(error.message)
            }
        })
    }
}