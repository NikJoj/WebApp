var button=document.getElementById('two');
const x = new XMLHttpRequest();
const url = '/artcle-one';

button.onClick = function ()
{
	x.open('GET',url);
	x.send();
}