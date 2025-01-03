class Component { // esta es un clase constructor, que sirve como base para poder crear mis propios componentes.
    constructor(container) {
        this.container = container
    }

    add(child) {
        if (!(child instanceof Component))
            throw new TypeError('child is not a ')

        this.container.appendChild(child.container)
    }


    remove(child) {
        if (!(child instanceof Component))
            throw new TypeError('child is not a ')

        this.container.removeChild(child.container)
    }

    setText(text) {
        if (typeof text !== 'string')
            throw new TypeError('text is not a string')

        this.container.innerText = text

    }

    setBackgroundColor(color) {
        if (typeof color !== 'string')
            throw new TypeError('color is not a string')

        this.container.style.backgroundColor = color
    }

    setColor(color) {
        if (typeof color !== 'string')
            throw new TypeError('color is not a string')
        this.container.style.color = color
    }

    setClassName(className) {
        if (typeof className !== 'string')
            throw new TypeError('className is not a string')

        this.container.style.className = className
    }
}