class Reservation {
    constructor(guest, room, days) {
        this.guest = guest
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee 
    }

    static baseFee = 150

    static showBaseFee() {
        console.log(` Base fee is ${Reservation.baseFee} `)
    }

    static get premiunFee() {
        return Reservation.baseFee * 1.5
    }

}

Reservation.showBaseFee()

const r1 = new Reservation(10, '101', 2)
console.log(r1)

const r2 = new Reservation(1, '221', 1)
console.log(r2)

