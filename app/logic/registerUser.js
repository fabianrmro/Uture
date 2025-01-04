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
        if (password !== password)
            throw new error('password do not match')


        let user = data.findUser(user => user.email === email)

        if (user !== null)
            throw new error('email already exists')

        user = data.findUser(user => user.username === username)

        if (user !== null)
            throw new error('user already exists')


        user = {
            name: name,
            surname: surname,
            username: username,
            email: email,
            password: password
        }

        data.inserUser(user)

    }

    logic.registerUser = registerUser
}