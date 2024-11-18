function createPost(image, caption) {
    createPostForm.onsubmit = function (event) {
        event.preventDefault

        var postImageInput = postImageInput.value
        var postCaptionInput = postCaptionInput.value

        var posts = localStorage.posts !== undefined ? JSON.parse(localStorage.posts) : []

        post = {
            image: postImage,
            caption: postCaption,
            user: sessionStorage.username,
            date: new Date().toISOString()
        }

        posts.push(post)

        localStorage.posts = JSON.stringify(posts)

        document.body.removeChild(createPostSection)
    }
}