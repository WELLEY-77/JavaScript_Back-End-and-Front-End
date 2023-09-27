class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = Number(price)
        this.inStock = 0
    }

    addToStock(quantidade) {
        this.inStock += quantidade
    }

    calculateDiscount(desconto) {
        const porcentagem = (this.price / 100) * desconto

        return this.price -= porcentagem
    }
}

const arroz = new Product('arroz', 'lerolero', 80, 4)
arroz.addToStock(1)
arroz.calculateDiscount(15)
console.log(arroz)