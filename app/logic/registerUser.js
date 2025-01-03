{
    const registerUser = (name, surname, username, email, password, passwordRepeat) => {

        if (name.trim() === '' || name.lenght < 2)
            throw new error('invalid name')
        if (surname.trim() === '' || surname.lenght < 2)
            throw new error('ivalid surname')
        if (username.trim() === '' || username.lenght < 2)
            throw new error('invalid username')
        if (!EMAIL_REGEX.test(email))
            throw new error('invalid email')
        if (password.trim() === '')
            throw new error('invalid password')
        if (password.trim() !== passwordRepeat)
            throw new error('password do not match ')

        const users = localStorage.users !== undefined ? JSON.parse(localStorage.users) : []

        const user = users.find(function (user) {
            return user.email === email || user.username === username
        })

        if (user !== undefined)
            throw new error('user already exists')

        if (password !== password)
            throw new error('password do not match')

        user = {
            name: name,
            surname: surname,
            username: username,
            email: email,
            password: password
        }

        users.push(user)

        localStorage.users = JSON.stringify(users)

    }

    logic.registerUser = registerUser
}