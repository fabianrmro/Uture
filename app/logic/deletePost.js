{
    const deletePost = postId => { // recibe un parametro para que se ejecute
        if (postId.trim().length === 0) // el trim te quita los espacios a los lados y si no hay nada en medio, lo deja vacio.
            throw new Error('ivalid postId')


        const post = data.findPost(post => post.id === postId)

        if (post === null)
            throw new Error('post not found')

        data.deletePost(post => post.id === postId)
    }

    logic.deletePost = deletePost

}