const segitigaSikuSikuMirrored = (param) => {
    let tempData = []
    let data = []
        for (let i = 0; i < param; i++) {
            for (let j = 0; j < param; j++) {
                if (j === param - i - 1) {
                    tempData.push('*')
                    data.push(...tempData)
                } else {
                    data.push(' ')
                }
            }
            console.log(...data)
            data = []
        }
}

segitigaSikuSikuMirrored(5)