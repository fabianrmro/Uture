{
    const home = new Components(document.body)
    const header = new Header
    home.add(header)

    const body = new Components(document.createElement('main'))
    body.setClassName('main')
    home.add(body)

    const postList = new PostList
    body.add(postList)

    postList.listPosts()

    const footer = document.createElement('footer')
    footer.className = 'footer'
    document.body.appendChild(footer)

    const createPostButton = document.createElement('button')
    createPostButton.className = 'form__button'
    createPostButton.innerText = '+'
    footer.appendChild(createPostButton)

    createPostButton.onclick = function () {
        const createPostSection = document.createElement('section')
        createPostSection.className = 'create-post-section'
        footer.appendChild(createPostSection)

        const createPostTitle = document.createElement('h2')
        createPostTitle.className = 'createTitle'
        createPostTitle.innerText = 'create Post'
        createPostSection.appendChild(createPostTitle)

        const createPostForm = document.createElement('form')
        createPostForm.className = 'form'
        createPostSection.appendChild(createPostForm)

        createPostForm.onsubmit = function (event) {
            event.preventDefault

            const postImage = postImageInput.value
            const postCaption = postCaptionInput.value

            try {
                createPost(postImage, postCaption)

                footer.removeChild(createPostSection)

                postList.clearPosts()
                postList.listPosts()
            } catch (error) {
                alert(error.message)

            }

        }

        const postImageFieldDIv = document.createElement('div')
        postImageFieldDIv.className = 'form__div'
        createPostForm.appendChild(postImageFieldDIv)

        const postImageLabel = document.createElement('label')
        postImageLabel.htmlFor = 'post-image-input'
        postImageLabel.innerText = 'Image'
        postImageFieldDIv.appendChild(postImageLabel)

        const postImageInput = document.createElement('input')
        postImageInput.id = postImageLabel.htmlFor
        postImageFieldDIv.appendChild(postImageInput)

        const postCaptionFieldDiv = document.createElement('div')
        postCaptionFieldDiv.className = 'form__div'
        createPostForm.appendChild(postCaptionFieldDiv)

        const postCaptionLabel = document.createElement('label')
        postCaptionLabel.htmlFor = 'post-caption-input'
        postCaptionLabel.innerText = 'Caption'
        postCaptionFieldDiv.appendChild(postCaptionLabel)

        const postCaptionInput = document.createElement('input')
        postCaptionInput.id = postCaptionLabel.htmlFor
        postCaptionFieldDiv.appendChild(postCaptionInput)

        const addButton = document.createElement('button')
        addButton.className = 'form__button'
        addButton.type = 'submit'
        addButton.innerText = 'Upload'
        createPostForm.appendChild(addButton)

        const cancelButton = document.createElement('button')
        cancelButton.className = 'form__button'
        cancelButton.type = 'reset'
        cancelButton.innerText = 'Cancel'
        createPostForm.appendChild(cancelButton)

        cancelButton.onclick = function () {
            footer.removeChild(createPostSection)
        }

    }

}