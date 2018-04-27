var main= document.getElementById('main');
var list= document.getElementById('list');
var p = document.getElementsByTagName('li');
let input = document.getElementById('input');

list.addEventListener('mousedown', function(e){
	e.target.classList.add('active');
	console.log(e.target.innerHTML)
	
	if (e.target.innerHTML ==='Back' ) {
		let mas = input.value.split('')
		console.log(mas)
		console.log(mas.splice(mas.length-1,1))
		console.log(mas)
		input.value = mas.join('')
	}
	else{
		input.value+=e.target.innerHTML;
	}
	
});

list.addEventListener('mouseup', function(e){
		for(var i = 0; i<p.length;i++){
		if (p[i].classList.contains('active')) {
		p[i].className = '';
	
	}
	

}})

input.addEventListener('keydown', function(e){
	console.log(e.key);
	for(var i = 0; i<p.length;i++){
		if (p[i].classList.contains(e.key)) {
		p[i].classList.add('active');
	
	}
}})
input.addEventListener('keyup', function(e){
	console.log(e.key);
	for(var i = 0; i<p.length;i++){
		if (p[i].classList.contains(e.key)) {
		p[i].classList.remove('active');
	
	}
}})
