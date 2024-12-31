class PostList extends Components {
    constructor() {
        super(document.createElement('section'))
        this.setClassName('post__list')
    }

    clearPosts() {
        for (const i = postList.children.length - 1; i > -1; i--) { // esto lo hago al reves porque asi me aseguro de eliminar todas las posiciones.
            const child = postList.container.children[i]

            this.container.removeChild(child)
        }
    }

    listPosts() {
        try {
            const posts = getAllPosts()

            const self = this // creamos esta variable para poder usarla, ya que tenemos una funcion abajo y si llamamos al this, ese this se pierde
            // este this apunta a list post que apunta al DOM

            posts.forEach(function (_post) {
                const post = new Post(_post)

                post.onPostDeleted(function () {
                    self.clearPosts()
                    self.listPosts()
                })

                post.onPostCaptionEdited(function () {
                    self.clearPosts()
                    self.listPosts()
                })
                self.add(post)
            })

        } catch (error) {
            alert(error.message)
        }
    }
}