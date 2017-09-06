var trial=document.getElementById('trial');
var btn=document.getElementById('btn1');


var left=0;

function moveRight()
{
	left=left+10;
	trial.style.marginLeft=left+'px';
	if (left === 1450) {
		left = 0;
	}
	console.log('value = '+left);
}

btn.onclick=function()
{
	trial.style.marginLeft='0px';
	var interval=setInterval(moveRight,50);
};
