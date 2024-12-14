(function () {

    var EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

    var form = document.querySelector('form')

    form.onsubmit = function (event) {
        event.preventDefault()

        var nameInput = document.getElementById('name-input')
        var surnameInput = document.getElementById('surname-input')
        var usernameInput = document.getElementById('username-input')
        var emailInput = document.getElementById('email-input')
        var passwordInput = document.getElementById('password-input')
        var passwordRepeatInput = document.getElementById('passwordRepeat-input ')

        var name = nameInput.value
        var surname = surnameInput.value
        var username = usernameInput.value
        var email = emailInput.value
        var password = passwordInput.value
        var passwordRepeat = passwordRepeatInput.value

        try {
            registerUser(name, surname, username, email, password, passwordRepeat)

            alert('user successfully registered')

            location.href = '../login'
        } catch (error) {
            alert(error.message)
        }
    }
})()