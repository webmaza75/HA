function validateparenthesis(text) {
	const parenthesis = [];

	for (let i = 0; i < text.length; i++) {
		if (text[i] === '(') {
			parenthesis.push(text[i]);
		}
		if (text[i] === ')') {
			if (parenthesis.length === 0) {
				return false;
			} else {
				parenthesis.pop();
			}
		}
	}
	
	return parenthesis.length === 0;
}
