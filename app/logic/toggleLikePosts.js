{
    function toggleLikePosts(postId) {
        if (postId.trim().length === 0) // el trim te quita los espacios a los lados y si no hay nada en medio, lo deja vacio.
            throw new Error('ivalid postId')

        const post = data.findPost(post => post.id === postId)

        if (post === null)
            throw new Error('post not found ')

        const index = post.likes.indexOf(sessionStorage.usename)

        if (index < 0)
            post.likes.push(sessionStorage.username)
        else
            post.likes.splice(index, 1)

        data.updatePost(post => post.id === postId)
    }
}