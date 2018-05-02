var main= document.getElementById('main');
var container = document.getElementById('container');
var list= document.getElementById('list');
var li = document.getElementsByTagName('li');
let input = document.getElementById('input');
var rightKeys = document.getElementById('rightKeys');
let Caps = false;
main.addEventListener('mousedown', function(e){
	if (e.target.classList.contains('row1') 
		||e.target.classList.contains('row2')
		||e.target.classList.contains('row3')
		||e.target.classList.contains('row4')
		||e.target.classList.contains('row5')) {
		
	}else{
		console.log(e)
	e.target.classList.add('active');
	
	if (e.target.classList.contains('Backspace')) {
		let mas = input.value.split('')
		console.log(mas.splice(mas.length-1,1))
		input.value = mas.join('')
	}
	else if (e.target.classList.contains('CapsLock')) {
		if (Caps) {
			Caps = false;
		}else{
			Caps = true;
		}
	}
	else if (e.target.classList.contains('Space')) {
		input.value+=' '
	}
	else if(e.target.classList.contains('Tab')){
		input.value+='      '
	}
	else if(e.target.classList.contains('Enter')){
input.value+= '\n'
	}else{
		if (Caps) {
			input.value+=e.target.innerHTML.toUpperCase();
		}
		else{
			input.value+=e.target.innerHTML
		}
		
	}
	
}});
main.addEventListener('mouseup', function(e){

	var masLi = li;
		if (e.target.classList.contains('active')) {
			if (e.target.classList.contains('CapsLock')) {
				if (!Caps) {
					e.target.classList.remove('active')
				}
			}else{e.target.classList.remove('active')}
		
	
	}	
});
	
rightKeys.addEventListener('mousedown',function(e){
	console.log(e.target);
	e.target.classList.add('active')
	console.log(e.target)

});
rightKeys.addEventListener('mouseup',function(e){
e.target.classList.remove('active')
}

)
input.addEventListener('keydown', function(e){
	if (e.altKey&&(e.key ==='Shift')) {
		getRussionKeys();
	}
	if (e.key =='') {
		alert('rf')
	}
	if(e.key == 'CapsLock'){
			if (Caps) {
			Caps = false;
		}else{
			Caps = true;
			console.log(Caps)
		}
	}
	for(var i = 0; i<li.length;i++){
		if (li[i].classList.contains(e.key)) {
		li[i].classList.add('active');
	
	}
}
})
input.addEventListener('keypress',function(e){

	let a = String.fromCharCode(e.keyCode).toLowerCase();
	console.log(String.fromCharCode(e.keyCode).toLowerCase())
	if (e.keyCode === 32) {
				for(var i = 0; i<li.length;i++){
		if (li[i].classList.contains('Space')) {
			li[i].classList.add('active')
		}
	}}else{
			for(var i = 0; i<li.length;i++){
		if (li[i].innerHTML === a) {
		li[i].classList.add('active');
	
	}
}
	}
})
input.addEventListener('keyup', function(e){
		for(var i = 0; i<li.length;i++){
		if (li[i].classList.contains('active')) {
			if (li[i].classList.contains('CapsLock')) {
				if (!Caps) {
					li[i].classList.remove('active')
				}
			}else{li[i].classList.remove('active')}
		
	
	}}
})

function getRussionKeys(){
for (var i = 0; i < li.length; i++) {
	switch(li[i].innerHTML){
		case 'q':
		li[i].innerHTML = 'й';
		break;
		case 'й':
		li[i].innerHTML = 'q';
		break;
		case 'w':
		li[i].innerHTML = 'ц';
		break;
		case 'ц':
		li[i].innerHTML = 'w';
		break;
		case 'e':
		li[i].innerHTML = 'у';
		break;
		case 'у':
		li[i].innerHTML = 'e';
		break;
		case 'r':
		li[i].innerHTML = 'к';
		break;
		case 'к':
		li[i].innerHTML = 'r';
		break;
		case 't':
		li[i].innerHTML = 'е';
		break;
		case 'е':
		li[i].innerHTML = 't';
		break;
		case 'y':
		li[i].innerHTML = 'н';
		break;
		case 'н':
		li[i].innerHTML = 'y';
		break;
		case 'u':
		li[i].innerHTML = 'г';
		break;
		case 'г':
		li[i].innerHTML = 'u';
		break;
		case 'i':
		li[i].innerHTML = 'ш';
		break;
		case 'ш':
		li[i].innerHTML = 'i';
		break;
		case 'o':
		li[i].innerHTML = 'щ';
		break;
		case 'щ':
		li[i].innerHTML = 'o';
		break;
		case 'p':
		li[i].innerHTML = 'з';
		break;
		case 'з':
		li[i].innerHTML = 'p';
		break;
		case '[':
		li[i].innerHTML = 'х';
		break;
		case 'х':
		li[i].innerHTML = '[';
		break;
		case ']':
		li[i].innerHTML = 'ъ';
		break;
		case 'ъ':
		li[i].innerHTML = ']';
		break;
		case 'a':
		li[i].innerHTML = 'ф';
		break;
		case 'ф':
		li[i].innerHTML = 'a';
		break;
		case 's':
		li[i].innerHTML = 'ы';
		break;
		case 'ы':
		li[i].innerHTML = 's';
		break;
		case 'd':
		li[i].innerHTML = 'в';
		break;
		case 'в':
		li[i].innerHTML = 'd';
		break;
		case 'f':
		li[i].innerHTML = 'а';
		break;
		case 'а':
		li[i].innerHTML = 'f';
		break;
		case 'g':
		li[i].innerHTML = 'п';
		break;
		case 'п':
		li[i].innerHTML = 'g';
		break;
		case 'h':
		li[i].innerHTML = 'р';
		break;
		case 'р':
		li[i].innerHTML = 'h';
		break;
		case 'j':
		li[i].innerHTML = 'о';
		break;
		case 'о':
		li[i].innerHTML = 'j';
		break;
		case 'k':
		li[i].innerHTML = 'д';
		break;
		case 'д':
		li[i].innerHTML = 'k';
		break;
		case 'l':
		li[i].innerHTML = 'д';
		break;
		case 'д':
		li[i].innerHTML = 'l';
		break;
		case ';':
		li[i].innerHTML = 'ж';
		break;
		case 'ж':
		li[i].innerHTML = ';';
		break;
		case "'":
		li[i].innerHTML = 'э';
		break;
		case 'э':
		li[i].innerHTML = "'";
		break;
		case 'z':
		li[i].innerHTML = 'я';
		break;
		case 'я':
		li[i].innerHTML = 'z';
		break;
		case 'x':
		li[i].innerHTML = 'ч';
		break;
		case 'ч':
		li[i].innerHTML = 'x';
		break;
		case 'c':
		li[i].innerHTML = 'с';
		break;
		case 'с':
		li[i].innerHTML = 'c';
		break;
		case 'v':
		li[i].innerHTML = 'м';
		break;
		case 'м':
		li[i].innerHTML = 'v';
		break;
		case 'b':
		li[i].innerHTML = 'и';
		break;
		case 'и':
		li[i].innerHTML = 'b';
		break;
		case 'n':
		li[i].innerHTML = 'т';
		break;
		case 'т':
		li[i].innerHTML = 'n';
		break;
		case 'm':
		li[i].innerHTML = 'ь';
		break;
		case 'ь':
		li[i].innerHTML = 'm';
		break;
		case ',':
		li[i].innerHTML = 'б';
		break;
		case 'б':
		li[i].innerHTML = ',';
		break;
		case '.':
		li[i].innerHTML = 'ю';
		break;
		case 'ю':
		li[i].innerHTML = '.';
		break;
		case '`':
		li[i].innerHTML = 'ё';
		break;
		case 'ё':
		li[i].innerHTML = '`';
		break;

	}
}
}