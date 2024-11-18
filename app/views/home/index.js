try {
    var name = getUserName()
    var title = document.querySelector('h1')

    title.innerText = 'Hello, ' + name + '!'
} catch (error) {
    alert(error.message)
}

var logoutButton = document.getElementById('logout-button')

logoutButton.onclick = function () {
    try {
        logoutUser()

        location.href = '../login '
    } catch (error) {
        alert(error.message)
    }
}

var createPostButton = document.getElementById('createPost-button')

createPostButton.onclick = function () {
    var createPostSection = document.createElement('section')
    document.body.appendChild(createPostSection)

    var createPostTitle = document.createElement('h2')
    createPostTitle.innerText = 'create Post'
    createPostSection.appendChild(createPostTitle)

    var createPostForm = document.createElement('form')
    createPostSection.appendChild(createPostForm)






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







    var postImageLabel = document.createElement('label')
    postImageLabel.htmlFor = 'post-image-input'
    postImageLabel.innerText = 'Image'
    createPostForm.appendChild(postImageLabel)

    var postImageInput = document.createElement('input')
    postImageInput.id = postImageLabel.htmlFor
    createPostForm.appendChild(postImageInput)


    var postCaptionLabel = document.createElement('label')
    postCaptionLabel.htmlFor = 'post-caption-input'
    postCaptionLabel.innerText = 'Caption'
    createPostForm.appendChild(postCaptionLabel)

    var postCaptionInput = document.createElement('input')
    postCaptionInput.id = postCaptionLabel.htmlFor
    createPostForm.appendChild(postCaptionInput)



    var addButton = document.createElement('button')
    addButton.type = 'submit'
    addButton.innerText = 'Upload'
    createPostForm.appendChild(addButton)

    var cancelButton = document.createElement('button')
    cancelButton.type = 'reset'
    cancelButton.innerText = 'Cancel'
    createPostForm.appendChild(cancelButton)

    cancelButton.onclick = function () {
        document.body.removeChild(createPostSection)
    }

}
