class Footer extends Component {
    constructor() {
        super(document.createElement('footer'))
        this.setClassName('footer')

        const createPostButton = new Button
        createPostButton.setClassName('form__button')
        createPostButton.setText('+')
        this.add(createPostButton)

        const self = this

        createPostButton.onClick(function () {
            const createPostSection = new Component(document.createElement('section'))
            createPostSection.setClassName('create-post-section')
            self.add(createPostSection)

            const createPostTitle = new Heading(2)
            createPostTitle.setClassName('createTitle')
            createPostTitle.setText('create Post')
            createPostSection.add(createPostTitle)

            const createPostForm = new Form
            createPostForm.setClassName('form')
            createPostSection.add(createPostForm)

            createPostForm.onSubmit(function (event) {
                event.preventDefault

                const postImage = postImageInput.getValue()
                const postCaption = postCaptionInput.getValue()

                try {
                    logic.createPost(postImage, postCaption)

                    self.remove(createPostSection)

                    self.onPostCreatedCallback()
                } catch (error) {
                    alert(error.message)

                }

            })

            const postImageFieldDIv = new Component(document.createElement('div'))
            postImageFieldDIv.setClassName('form__div')
            createPostForm.add(postImageFieldDIv)

            const postImageLabel = new Label
            postImageLabel.setFor('post-image-input')
            postImageLabel.setText('Image')
            postImageFieldDIv.add(postImageLabel)

            const postImageInput = new Input
            postImageInput.setId(postImageLabel.getFor)
            postImageFieldDIv.add(postImageInput)

            const postCaptionFieldDiv = new Component(document.createElement('div'))
            postCaptionFieldDiv.setClassName('form__div')
            createPostForm.add(postCaptionFieldDiv)

            const postCaptionLabel = new Label
            postCaptionLabel.setFor('post-caption-input')
            postCaptionLabel.setText('Caption')
            postCaptionFieldDiv.add(postCaptionLabel)

            const postCaptionInput = new Input
            postCaptionInput.id(postCaptionLabel.getFor)
            postCaptionFieldDiv.add(postCaptionInput)

            const addButton = new Button
            addButton.setClassName('form__button')
            addButton.setType('submit')
            addButton.setText('Upload')
            createPostForm.add(addButton)

            const cancelButton = new Button
            cancelButton.setClassName('form__button')
            cancelButton.setType('reset')
            cancelButton.setText('Cancel')
            createPostForm.add(cancelButton)

            cancelButton.onClick(function () {
                self.remove(createPostSection)
            })

        })
    }

    onPostCreated(callback) {
        this.onPostCreatedCallback = callback
    }
} 