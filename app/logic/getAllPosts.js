{
    const getAllPosts = () => {
        let posts = data.findPosts(post => true)

        return posts.reverse() // este metodo te devuelve el array invertido

    }

    logic.getAllPosts = getAllPosts
}