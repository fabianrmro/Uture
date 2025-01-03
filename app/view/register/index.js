{

    const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

    const registerForm = new Form('form')

    registerForm.onSubmit(function (event) {
        event.preventDefault()

        const nameInput = document.getElementById('name-input')
        const surnameInput = document.getElementById('surname-input')
        const usernameInput = document.getElementById('username-input')
        const emailInput = document.getElementById('email-input')
        const passwordInput = document.getElementById('password-input')
        const passwordRepeatInput = document.getElementById('passwordRepeat-input ')

        const name = nameInput.value
        const surname = surnameInput.value
        const username = usernameInput.value
        const email = emailInput.value
        const password = passwordInput.value
        const passwordRepeat = passwordRepeatInput.value

        try {
            logic.registerUser(name, surname, username, email, password, passwordRepeat)

            alert('user successfully registered')

            location.href = '../login'
        } catch (error) {
            alert(error.message)
        }
    })

    const loginLink = new Link('a')

    loginLink.onClick(function (event) {
        event.preventDefault()

        location.href = '../login'
    })
}