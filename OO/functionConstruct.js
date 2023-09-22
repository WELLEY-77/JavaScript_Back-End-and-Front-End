function Book(title, author, tags, quatity) {
    this.title = title,
    this.author = author,
    this.tags = tags,
    this.quatity = quatity,
    this.onStock = function addOnStock(qua) {
        this.quatity += qua
    },
    this.save = () => {
        // Salvando do BD
    }
};

const tags = ['Christopper', 'Vallay']
const harry = new Book('Aventr', 'potter', tags, 400 )

console.log(harry)