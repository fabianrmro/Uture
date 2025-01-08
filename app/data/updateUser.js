{
    function updateUser(condition, user) {
        const users = localStorage.users !== undefined ? JSON.parse(localStorage.users) : []

        const userIndex = users.findIndex(condition)

        if (userIndex > -1) {
            users.splice(userIndex, 1, user)
            localStorage.users = JSON.stringify(users)

        }
    }

    data.updateUser = updateUser
}