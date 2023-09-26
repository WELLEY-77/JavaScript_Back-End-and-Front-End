class Product {
    constructor(name, description, price, inStock) {
        this.name = name
        this.description = description
        this.price = Number(price)
        this.inStock = Number(inStock)
    }

    addToStock(quantidade) {
        this.inStock += quantidade
    }

    calculateDiscount(desconto) {
        const porcentagem = (this.price / 100) * desconto

        this.price -= porcentagem
    }
}

const arroz = new Product('arroz', 'lerolero', 5, 4)
arroz.addToStock(1)
arroz.calculateDiscount(10)
console.log(arroz)