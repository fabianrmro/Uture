class PostList extends Component {
    constructor() {
        super(document.createElement('section'))
        this.setClassName('post__list')
    }

    clearPosts() {
        for (const i = this.container.children.length - 1; i > -1; i--) { // esto lo hago al reves porque asi me aseguro de eliminar todas las posiciones.
            //const child = postList.container.children[i]
            const child = this.container.children[i] // cambie a "this" por que ya está dentro del postList

            this.container.removeChild(child)
        }
    }

    listPosts() {
        try {
            const posts = logic.getAllPosts()

            const self = this

            posts.forEach(_post => {
                const post = new Post(_post)

                post.onPostDeleted(() => {
                    self.clearPosts()
                    self.listPosts()
                })

                post.onPostCaptionEdited(() => {
                    self.clearPosts()
                    self.listPosts()
                })
                self.add(post)
            })

        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }
}