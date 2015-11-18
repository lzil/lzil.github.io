$(document).ready(function() {
	words = [
		['coder', 'student', 'runner', 'philosopher', 'dreamer'],
		['spends', 'wastes', 'kills', 'squanders', 'expends'],
		['debugging', 'penspinning', 'eating', 'sleeping', 'daydreaming', 'reading', 'dancing', 'thinking', 'napping'],
		['kinda', 'really', 'only', 'sort of'],
		['fruit', 'chocolate', 'tennis', 'Python', 'machine learning', 'design', 'dragons', 'origami', 'kpop', 'poly art']
	]
	wordsInd = [0, 0, 0, 0, 0]
	wordsCurInd = [0, 0, 0, 0, 0]
	var iam = $('.iam-text');

	var buildup = ['', '', '', '']
	function build (offset, buildup) {
		var iamnum = $('#iam' + (offset + 1))[0]
		setTimeout(function () {
			buildup += words[offset][wordsInd[offset]].charAt(wordsCurInd[offset])
			iamnum.innerHTML = buildup
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
		}, 70)
	}
	for (i = 0; i < 5; i++) {
		
		build(i, '')
	}
	
	
})