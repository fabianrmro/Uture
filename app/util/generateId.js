function generateId() {
    const id10 = Math.random().toString().slice(2).toString()

    const id36 = Math.round(id10 / 100000000000).toString()

    return id36
}