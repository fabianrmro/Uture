class Header extends Components {
    constructor() {
        super(document.createElement('header'))

        this.container.className = 'header'


        const userName = new Paragraph
        userName.setClassName = 'hello__User ' // como exrtienden de components es setClass
        this.add(userName)

        try {
            var name = getUserName()

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
                logoutUser()

                location.href = '../login '
            } catch (error) {
                alert(error.message)
            }
        })
    }
}