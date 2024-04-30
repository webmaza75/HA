/**
 * 2.2. Валидация скобочных выражений
 * 
 * Эту задачу частенько можно встретить на собеседованиях.
 * Возможно, с такой проблемой вы уже сталкивались и так или иначе успешно решали.
 * Звучит она довольно просто: в данном нам тексте нужно провалидировать,
 * что все скобки корректно расставлены. Например,
 * (((())())) является корректной расстановкой, а ()( — нет.
 * 
 * Примеры:
 * validateParentHesis('(((())()))'); //true
 * validateParenthesis('())'); // false
 */
function validateParentHesis(text) {
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
