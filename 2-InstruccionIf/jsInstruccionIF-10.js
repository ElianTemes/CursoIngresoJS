function mostrar()
{
	let ranNum;
	ranNum = Math.floor(Math.random() * 10) + 1;

	if ( ranNum >= 9 ){
		alert('EXCELENTE')
	}
	else if ( ranNum > 4 && ranNum < 9){
		alert('Aprobo');
	}
	else {
		alert('Vamos, la proxima se puede');
	}

}