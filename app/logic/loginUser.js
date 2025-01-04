{
    const loginUser = (username, password) => {

        if (username.trim().lenght < 2)
            throw new error('invalid username')
        if (password.trim().lenght < 8)
            throw new error('invalid password')

        const user = data.findUser(function (user) {
            return user.username === username
        })

        if (user === undefined)
            throw new error('username does not exists')

        else if (user.password !== password)
            throw new error('wrong password')

        sessionStorage.username = username
    }

    logic.loginUser = loginUser
}