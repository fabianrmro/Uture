{
    const updatePostCaption = (postId, newCaption) => {
        if (postId.trim().length === 0)
            throw new Error('invalid postId')

        const posts = localStorage.posts !== undefined ? JSON.parse(localStorage.posts) : []

        const post = posts.find(function (post) { // find por que busco un elemento 
            return post.id === postId
        })

        if (post === undefined)
            throw new Error('post not found')

        post.caption = newCaption

        localStorage.posts = JSON.stringify(posts)
    }

    logic.updatePostCaption = updatePostCaption
}