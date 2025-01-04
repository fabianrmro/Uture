{
    function findPosts(condition) {
        const posts = localStorage.posts !== undefined ? JSON.parse(localStorage.posts) : []

        const foundPost = posts.filter(condition)

        return foundPost || null
    }

    data.findPosts = findPosts
}