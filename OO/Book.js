class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }

    publish() {
        this.published = true
    }

}

const eragon = new Book('Eragon')
eragon.publish()

const harry = new Book('Harry')

console.log(eragon)
console.log(harry)