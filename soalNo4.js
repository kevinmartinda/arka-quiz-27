const hitungVokal = (param) => {
	const vokal = ['a', 'i', 'u', 'e', 'o']
	let count = 0

	for (let i = 0; i < param.length; i++) {
		if (vokal.indexOf(param[i]) !== -1) {
			count++
        }
    }

	console.log(count)
}

hitungVokal('programmer')
hitungVokal('hmm..')