{
    const getAllPosts = () => {
        const user = data.findUser(user => user.username === sessionStorage.username)

        if (user === null)
            throw new Error('user not found')

        const posts = data.findPosts(() => true)

        posts.forEach(post => {
            post.fav = user.favs.includes(post.id)
            post.like = post.likes.includes(sessionStorage.username)
        })

        return posts.reverse()
    }

}