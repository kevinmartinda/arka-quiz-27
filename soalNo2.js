const segitigaSikuSikuTerbalik = (param) => {
    let data = []
    for (let i = param; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            data.push('*')
        }
        console.log(...data)
        data = []
    }
}

segitigaSikuSikuTerbalik(5)