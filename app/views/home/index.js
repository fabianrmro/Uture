(function () {

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

            var postImage = postImageInput.value
            var postCaption = postCaptionInput.value

            try {
                createPost(postImage, postCaption)

                document.body.removeChild(createPostSection)

                clearPosts()
                listPosts()
            } catch (error) {
                alert(error.message)

            }

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

    var postList = document.createElement('section')
    document.body.appendChild(postList)

    function clearPosts() {
        for (var i = postList.children.length - 1; i > -1; i--) { // esto lo hago al reves porque asi me aseguro de eliminar todas las posiciones.
            var child = postList.children[i]

            postList.removeChild(child)
        }
    }

    function listPosts() {
        try {
            var posts = getAllPosts()

            posts.forEach(function (post) {
                var postArticle = document.createElement('article')
                postList.appendChild(postArticle)

                var postAuthorTitle = document.createElement('h3') // este es el titulo que tiene el post,
                postAuthorTitle.innerText = post.author
                postArticle.appendChild(postAuthorTitle)

                var postImage = document.createElement('img') // imgen
                postImage.src = post.image
                postArticle.appendChild(postImage)

                var postCaption = document.createElement('p') // para el caption, usamos un p(parrafo)
                postCaption.innerText = post.caption
                postArticle.appendChild(postCaption)

                var postDateTime = document.createElement('time')
                postDateTime.innerText = formatTime(new Date(post.date))// ponemos innerText porque es solo texto el que se enseña en la pagina
                postArticle.appendChild(postDateTime)

                if (post.author === getUserUserName()) {
                    var deleteButton = document.createElement('button')
                    deleteButton.innerText = 'Delete'
                    postArticle.appendChild(deleteButton)

                    deleteButton.onclick = function () {
                        if (confirm('delete post?')) // confirm para preguntar y confirmar una decisión, como esto tb esxite el open, que es cuando abro un archivo externo
                            try {
                                deletePost(post.id) // le paso los parametros que quiero eliminar

                                clearPosts()
                                listPosts()
                            } catch (error) {
                                alert(error.message)
                                if (error.message === 'post not found') {
                                    clearPosts()
                                    listPosts()
                                }
                            }
                    }

                    var editButton = document.createElement('button')
                    editButton.innerText = 'Edit'
                    postArticle.appendChild(editButton)

                    editButton.onclick = function () {

                        editCaptionForm = document.createElement('form')
                        postArticle.appendChild(editCaptionForm)

                        var editCaptionLabel = document.createElement('label')
                        editCaptionLabel.htmlFor = 'edit-caption-input'
                        editCaptionLabel.innerHTML = 'Edit'
                        editCaptionForm.appendChild(editCaptionLabel)

                        var editCaptionInput = document.createElement('input')
                        editCaptionInput.id = editCaptionLabel.htmlFor
                        editCaptionInput.value = post.caption
                        editCaptionForm.appendChild(editCaptionInput)

                        var editCaptionSubmitButton = document.createElement('button')
                        editCaptionSubmitButton.type = 'submit'
                        editCaptionSubmitButton.innerText = 'Save'
                        editCaptionForm.appendChild(editCaptionSubmitButton)

                        var editCaptionCancel = document.createElement('button')
                        editCaptionCancel.type = 'cancel'
                        editCaptionCancel.innerText = 'Cancel'
                        editCaptionForm.appendChild(editCaptionCancel)

                        editCaptionCancel.onclick = function () {
                            postArticle.removeChild(editCaptionForm)
                        }

                        editCaptionForm.onsubmit = function (event) { // aquí mecanizo el comportamiento
                            event.preventDefault()

                            try {
                                var newCaption = editCaptionInput.value

                                updatePostCaption(post.id, newCaption)

                                postArticle.removeChild(editCaptionForm)// si todo va bien, cambia el value y lo guardas en newCaption y luego remuevo form

                            } catch (error) {
                                alert(error.message)

                                if (error.message === 'post not found') {

                                }

                            }
                        }

                    }

                }

            })

        } catch (error) {
            alert(error.message)
        }
    }

    listPosts()
})()