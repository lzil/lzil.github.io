$(document).ready(function() {
	words = [
		['coder', 'student', 'runner', 'philosopher'],
		['spends', 'wastes', 'kills'],
		['debugging', 'penspinning', 'eating'],
		['kinda', 'really', 'might'],
		['fruit', 'chocolate', 'tennis', 'Python']
	]
	wordsInd = [0, 0, 0, 0, 0]
	wordsCurInd = [0, 0, 0, 0, 0]
	var about = $('.about-text');

	var buildup = ['', '', '', '']
	function build (offset, buildup) {
		var aboutnum = $('#about' + (offset + 1))[0]
		setTimeout(function () {
			buildup += words[offset][wordsInd[offset]].charAt(wordsCurInd[offset])
			aboutnum.innerHTML = buildup
			console.log(aboutnum)
			wordsCurInd[offset]++;
			if (wordsCurInd[offset] < words[offset][wordsInd[offset]].length) {
				build(offset, buildup);
			} else {
				var newWord = wordsInd[offset];
				while (newWord === wordsInd[offset]) {
					newWord = Math.floor(Math.random() * words[offset].length)
				}
				wordsInd[offset] = newWord
				wordsCurInd[offset] = 0
				setTimeout(function() {
					build(offset, '')
				}, 2000)
			}
		}, 100)
	}
	for (i = 0; i < 5; i++) {
		
		build(i, '')
	}
	
	
})