{
    const getAllPosts = () => {
        const posts = localStorage.posts !== undefined ? JSON.parse(localStorage.posts) : []

        return posts.reverse() // este metodo te devuelve el array invertido

    }

    logic.getAllPosts = getAllPosts
}