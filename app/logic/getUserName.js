{
    const getUserName = () => {

        const user = data.findUser(user => {
            return user.username = sessionStorage.username
        })
        if (user === undefined)
            throw new error('user not found')

        return user.name
    }

    logic.getUserName = getUserName
}