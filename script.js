function primeNumber(num) {
	// Определяет, является ли число простым
	// num - целое положительное число.
	// Если число простое возвращает true,
	// иначе false
	var divisor = 2;
	while (divisor < num) {
		if (num % divisor === 0) {
			return false;
		} 
		divisor += 1;			
	}
	return true;
}


function printPrimeNumber() {
	// Выводит список простых чисел до введенного числа включительно
	var input_number = parseInt(document.querySelector('input').value);
	var h1 = document.querySelector('h1');
	for (var i = 2; i <= input_number; i++) {
		if (primeNumber(i)) {
			h1.innerHTML += i + ' ';				
		}
	}
}


(function testPrimeNumber() {
	console.log('Тестируем: primeNumber');
	console.log('Test #1');
	temp = 17;
	if (primeNumber(temp)) {
		console.log('ok');
	}
	else {
		console.log('fail');
	}

	console.log('Test #2');
	temp = 4;
	if (primeNumber(temp) == false) {
		console.log('ok');
	}
	else {
		console.log('fail');
	}
})();