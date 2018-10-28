var trial=document.getElementById('trial');
var btn=document.getElementById('btn1');
var b=document.getElementById('counter');

var left=0;
var i=0;



function moveRight()
{
	left=left+10;
	trial.style.marginLeft=left+'px';
	if (left === 1450) {
		left = 0;
	}
	console.log('value = '+left);
}


function moveLeft()
{
	left=left-10;
	trial.style.marginLeft=left+'px';
	if (left === -1450) {
		left = 0;
	}
	console.log('value = '+left);
}


btn.onclick=function()
{
	trial.style.marginLeft='0px';
	var interval=setInterval(moveRight,50);
};

var counter=0;

b.onclick=function () {	
	//j=j+1;
	//console.log('value is '+j);
	//var request=new XMLHttpRequest();
	//request.onreadystatechange=function() {
		//if(request.readyState===XMLHttpRequest.DONE){
			//if(request.status===200)
			//{
				//var j=request.responseText;
				counter=counter+1;
				var span=document.getElementById('count');
				span.innerHTML=counter.toString();
			//}
		//}
	//}

//request.open('GET','localhost:8000/counter');
//request.send(null);

};
