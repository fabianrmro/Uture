class Post extends Components {
    constructor(post) {
        super(document.createElement('article'))
        this.setClassName('post')

        const postAuthorTitle = new Heading(3)
        postAuthorTitle.setClassName('post__author')
        postAuthorTitle.setText(post.author)
        this.add(postAuthorTitle)

        const postImage = new Image
        postImage.setClassName('post__image')
        postImage.setUrl(post.image)
        this.add(postImage)

        const postCaption = new Paragraph // para el caption, usamos un p(parrafo)
        postCaption.setClassName('text__area')
        postCaption.setText(post.caption)
        this.add(postCaption)

        const self = this // es dinamico

        if (post.author === getUserUserName()) {
            const ActionButtonsDiv = new Components(document.createElement('div'))
            ActionButtonsDiv.setClassName('post__ActionButton')
            this.add(ActionButtonsDiv)

            const deleteButton = new Button
            deleteButton.setText('Delete')
            ActionButtonsDiv.add(deleteButton)

            deleteButton.onClick(function () {
                if (confirm('delete post?')) // confirm para preguntar y confirmar una decisión
                    try {
                        deletePost(post.id) // le paso los parametros que quiero eliminar

                        self.onPostDeletedCallback()

                    } catch (error) {
                        alert(error.message)
                        if (error.message === 'post not found') {

                            self.onPostDeletedCallback()
                        }
                    }
            })

            const editButton = new Button
            editButton.setText('Edit')
            ActionButtonsDiv.add(editButton)

            editButton.onClick(function () {
                const editCaptionForm = new Form
                editCaptionForm.setClassName('form')
                self.add(editCaptionForm) // self porque hace referencia al this de fuera

                const editCaptionLabel = document.createElement('label')
                editCaptionLabel.htmlFor = 'edit-caption-input'
                editCaptionLabel.innerHTML = 'Edit'
                editCaptionForm.appendChild(editCaptionLabel)

                const editCaptionInput = document.createElement('input')
                editCaptionInput.className = "text__area"
                editCaptionInput.id = editCaptionLabel.htmlFor
                editCaptionInput.value = post.caption
                editCaptionForm.appendChild(editCaptionInput)

                const editCaptionSubmitButton = document.createElement('button')
                editCaptionSubmitButton.type = 'submit'
                editCaptionSubmitButton.innerText = 'Save'
                editCaptionForm.appendChild(editCaptionSubmitButton)

                const editCaptionCancel = document.createElement('button')
                editCaptionCancel.type = 'cancel'
                editCaptionCancel.innerText = 'Cancel'
                editCaptionForm.appendChild(editCaptionCancel)

                editCaptionCancel.onclick = function () {
                    self.remove(editCaptionForm)
                }

                editCaptionForm.onSubmit(function (event) { // aquí mecanizo el comportamiento
                    event.preventDefault()

                    try {
                        const newCaption = editCaptionInput.value

                        updatePostCaption(post.id, newCaption)

                        self.remove(editCaptionForm)// si todo va bien, cambia el value y lo guardas en newCaption y luego remuevo form

                        self.onPostCaptionEditedCallback()

                    } catch (error) {
                        alert(error.message)

                        if (error.message === 'post not found') {
                            self.onPostCaptionEditedCallback()

                        }
                    }
                })
            })
        }

        const postDateTime = document.createElement('time')
        postDateTime.className = 'post__date'
        postDateTime.innerText = formatTime(new Date(post.date))// ponemos innerText porque es solo texto el que se enseña en la pagina
        this.container.appendChild(postDateTime)

    }

    onPostDeleted(callback) {
        this.onPostDeletedCallback = callback
    }

    onPostCaptionEdited(callback) {
        this.onPostCaptionEditedCallback = callback
    }
}