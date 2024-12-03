function createPost(image, caption) {
    if (!image.startsWith('http'))
        throw new error('invalid Image')

    var posts = localStorage.posts !== undefined ? JSON.parse(localStorage.posts) : []

    var post = {
        image: image,
        caption: caption,
        author: sessionStorage.username,
        date: new Date().toISOString()
    }

    posts.push(post)

    localStorage.posts = JSON.stringify(posts)

}