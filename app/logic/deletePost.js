function deletePost(postId) { // recibe un parametro para que se ejecute
    if (postId.trim().length === 0) // el trim te quita los espacios a los lados y si no hay nada en medio, lo deja vacio.
        throw new Error('ivalid postId')


    var posts = localStorage.posts !== undefined ? JSON.parse(localStorage.posts) : []

    var postIndex = posts.findIndex(function (post) {
        return post.id === postId
    })

    if (postIndex < 0)
        throw new Error('post not found')


    posts.splice(postIndex, 1) // le paso un indice y una posicion para que elimine, el splice elimina.
    localStorage.posts = JSON.stringify(posts)
}