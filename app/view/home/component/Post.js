class Post extends Component {
    constructor(post) {
        super(document.createElement('article'))
        this.setClassName('post')

        const postAuthorTitle = new Heading(3)
        postAuthorTitle.setClassName('post__author')
        postAuthorTitle.setText(post.author || 'Autor desconocido')
        this.add(postAuthorTitle)

        const postImage = new Image
        postImage.setClassName('post__image')
        postImage.setUrl(post.image)
        this.add(postImage)

        const postCaption = new Paragraph // para el caption, usamos un p(parrafo)
        postCaption.setClassName('text__area')
        postCaption.setText(post.caption || 'Sin descripción disponible')
        this.add(postCaption)

        const self = this // es dinamico

        const ActionButtonsDiv = new Component(document.createElement('div'))
        ActionButtonsDiv.setClassName('post__ActionButton')
        this.add(ActionButtonsDiv)

        const postLikeButton = new Button
        postLikeButton.setText(post.likes.includes(logic.getUserUserName()) ? '♥️' : '♡')
        ActionButtonsDiv.add(postLikeButton)

        postLikeButton.onClick(() => {
            try {
                logic.toggleLikePost

            } catch (error) {
                console.log(error)
                alert(error.message)
            }
        })

        if (post.author === logic.getUserUserName()) {

            const deleteButton = new Button
            deleteButton.setText('Delete')
            ActionButtonsDiv.add(deleteButton)

            deleteButton.onClick(() => {
                if (confirm('delete post?')) // confirm para preguntar y confirmar una decisión
                    try {
                        logic.deletePost(post.id) // le paso los parametros que quiero eliminar

                        self.onPostDeletedCallback()

                    } catch (error) {
                        console.log(error)

                        alert(error.message)
                        if (error.message === 'post not found') {

                            self.onPostDeletedCallback()
                        }
                    }
            })

            const editButton = new Button
            editButton.setText('Edit')
            ActionButtonsDiv.add(editButton)

            editButton.onClick(() => {
                const editCaptionForm = new Form
                self.add(editCaptionForm) // self porque hace referencia al this de fuera

                const editCaptionLabel = new Label
                editCaptionLabel.setFor('edit-caption-input')
                editCaptionForm.add(editCaptionLabel)

                const editCaptionInput = new Input
                editCaptionInput.setId(editCaptionLabel.getFor)
                editCaptionInput.setValue(post.caption)
                editCaptionForm.add(editCaptionInput)

                const editCaptionSubmitButton = new Button
                editCaptionSubmitButton.setType('submit')
                editCaptionSubmitButton.setText('Save')
                editCaptionForm.add(editCaptionSubmitButton)

                const editCaptionCancel = new Button
                editCaptionCancel.setType('cancel')
                editCaptionCancel.setText('Cancel')
                editCaptionForm.add(editCaptionCancel)

                editCaptionCancel.onClick(() => self.remove(editCaptionForm))

                editCaptionForm.onSubmit(event => { // aquí mecanizo el comportamiento
                    event.preventDefault()

                    try {
                        const newCaption = editCaptionInput.getValue

                        logic.updatePostCaption(post.id, newCaption)

                        self.remove(editCaptionForm)// si todo va bien, cambia el value y lo guardas en newCaption y luego remuevo form

                        self.onPostCaptionEditedCallback()

                    } catch (error) {
                        console.log(error)

                        alert(error.message)

                        if (error.message === 'post not found') {
                            self.onPostCaptionEditedCallback()

                        }
                    }
                })
            })
        }

        const postDateTime = new Component(document.createElement('time'))
        postDateTime.setClassName('post__date')
        postDateTime.setText(formatTime(new Date(post.date)) || 'Fecha no disponible')// ponemos innerText porque es solo texto el que se enseña en la pagina
        this.add(postDateTime)

    }

    onPostDeleted(callback) {
        this.onPostDeletedCallback = callback
    }

    onPostCaptionEdited(callback) {
        this.onPostCaptionEditedCallback = callback
    }
}