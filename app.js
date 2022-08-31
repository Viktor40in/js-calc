const calc = document.querySelector('.calculator');
let result = document.querySelector('.calc_window');

calc.addEventListener('click', function(event) {
	if(!event.target.classList.contains('button')) return

	const value = event.target.innerText;

	switch(value) {
		case 'AC':
			result.innerText = '';
			break;
		
		case '=':
			result.innerText = eval(result.innerText).toFixed(2);
			break;
			
		default:
			result.innerText += value;	
	}

	


})
