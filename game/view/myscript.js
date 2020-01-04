window.onload=function(){
var startButton=document.getElementById('startButton');
var gameScreen=document.getElementById('gameScreen');

startButton.addEventListener('click',showScreen);
 function showScreen(){
 	gameScreen.classList.remove('hide');
 	startButton.classList.add('hide');
 }
}

function sound1(){
	document.getElementById('gun-sound').play();
}
			
	var score1=0;

	function green_bird(){
		score1++;
		document.getElementById('score').innerHTML="Score: " + score1 ;
		document.getElementById("bird1").style.display="none";
		document.getElementById("bird3").style.display="block";
	}
	function baloon(){
		score1++;
		document.getElementById('score').innerHTML="Score:" + score1 ;
		document.getElementById("bird2").style.display="none";
		document.getElementById("bird1").style.display="block";
	}
	function red_bird(){
		score1++;
		document.getElementById('score').innerHTML="Score: " + score1 ;
		document.getElementById("bird3").style.display="none";
		document.getElementById("bird2").style.display="block";
	}
	function rasheed(){
		score1++;
		document.getElementById('score').innerHTML="Score: " + score1 ;
		document.getElementById("rasheed").style.display="none";
		document.getElementById("bird3").style.display="block";
		document.getElementById("bird1").style.display="block";
		document.getElementById("bird2").style.display="block";
	}

							
