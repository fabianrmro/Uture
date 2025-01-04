{
    const updatePostCaption = (postId, newCaption) => {
        if (postId.trim().length === 0)
            throw new Error('invalid postId')

        const post = data.findPost(post => post.id === postId) //  find por que busco un elemento

        if (post === null)
            throw new Error('post not found')

        post.caption = newCaption

        data.updatePost(post => post.id === postId, post)
    }

    logic.updatePostCaption = updatePostCaption
}