const arkaFood = (harga, kode, jarak, pajak) => {
    let total = harga

    switch(kode) {
        case 'ARKAFOOD5':
            diskon = harga * (50/100)
                if (harga >= 50000 && diskon < 50000) {
                    total -= diskon
                } else {
                    total -= 0
                }
            break
        case 'DITRAKTIRDEMY':
            diskon = harga * (60/100)
                if (harga >= 25000 && diskon < 30000) {
                    total -= diskon
                } else {
                    total -= 0
                }
        default:
            total += 0
    }
    
    if(jarak <= 1.5) {
        total += 5000
    } else {
        total += 5000
        total += Math.ceil(jarak - 1.5) * 3000
    }

    if (pajak) {
        total += harga * (5/100)
    }

    return total
}

console.log(arkaFood(75000, 'ARKAFOOD5', 5, false))
console.log(arkaFood(25000, 'DITRAKTIRDEMY', 7, true))