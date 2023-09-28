class Property {
    constructor(area, price) {
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter() {
        return this.area / this.price
    }
}

class House extends Property {}

const house = new House(100, 10000)
console.log(house)
console.log(house.getPricePerSquareMeter())

class Apartment extends Property {
    constructor(area, price, number) {
        super(area, price)
        this.number = number
    }
    
    getFloor() {
        return this.number.slice(0, -2)
    }
}

const apt = new Apartment(100, 9000,  '998')

console.log(apt)
console.log(apt.getPricePerSquareMeter())
console.log(apt.getFloor())