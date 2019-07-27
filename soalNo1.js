const segitigaSikuSiku = (param) => {
    let data = []
    for (let i = 0; i < param; i++) {
        for (let j = i; j > 0; j--) {
            data.push('*')
        }
        console.log(...data)
        data = []
    }
}

segitigaSikuSiku(5)
