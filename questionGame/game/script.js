window.onload=function(){
	const startButton=document.getElementById('start-btn');
	const queContainElement=document.getElementById('que-container');
	const questionElement=document.getElementById('question');
	const answerButton=document.getElementById('answer-btn');
	const nextButton=document.getElementById('next-btn');
	const controls=document.getElementById('controls');
	const gameOver=document.getElementById('gameOver');
	const scoreDiv=document.getElementById('score');

	let score;
	let shuffledQuestion,currentQuestiionIndex;
	
	startButton.addEventListener('click',startgame);
	nextButton.addEventListener('click',()=>{
		currentQuestiionIndex++;
		nextQuestion();
	});

function startgame(){
	console.log("started");
	controls.classList.remove('hide');
	gameOver.classList.add('hide');
	startButton.classList.add('hide');
	shuffledQuestion=questions.sort(()=>Math.random() - .5);
	currentQuestiionIndex=0;
	score=0;
	scoreDiv.classList.remove('hide');
	scoreDiv.innerText="Score:0";
	queContainElement.classList.remove('hide');
	nextQuestion();
}

function nextQuestion(){
	resetState();
	showQuestion(shuffledQuestion[currentQuestiionIndex])
}
function showQuestion(question){
	questionElement.innerText=question.question;
	question.answer.forEach(answer => {
		const button = document.createElement('div');
		button.innerText=answer.text;
		button.classList.add('button');
		if(answer.correct){
			button.dataset.correct=answer.correct;
		}
		button.addEventListener('click',selectanswer);
		controls.appendChild(button);
	})
}
function resetState(){
	nextButton.classList.add('hide');
	while(controls.firstChild){
		controls.removeChild(controls.childNodes[0]);
		controls.firstChild;
	}
}
function selectanswer(h){
	const selectedButton=h.target;
	const correct=selectedButton.dataset.correct;
	if(correct){
	score+=5;
	scoreDiv.innerText="Score:"+score;
	Array.from(controls.children).forEach(button=>{
		setstatusclass(button, button.dataset.correct)
	});
	if (shuffledQuestion.length > currentQuestiionIndex + 1) {
		startButton.classList.add('hide');
		nextButton.classList.remove('hide');
	}
	else{
		nextButton.classList.add('hide');
		startButton.innerText='Restart';
		startButton.classList.remove('hide')
	}
}else{
	selectedButton.classList.add('wrong');
	controls.classList.add('hide');
	score=0;
	scoreDiv.innerText="Score:"+score;
	gameOver.classList.remove('hide');
	startButton.innerText='Restart';
	startButton.classList.remove('hide');
}
}
function setstatusclass(element, correct){
	cleanstatusclass(element)
	if(correct){
		element.classList.add('correct');
	}
	else{
		element.classList.add('wrong');
	}
}
function cleanstatusclass(element){
	element.classList.remove('correct');
	element.classList.remove('wrong');
}
const questions=[
{
	question:"Which of the following statement is in suport with Gestalt theory",
	answer:[
	{text:'Perception is the prodcuct of heredity',correct:false},
	{text:'The mind organizers sensation into meaningful perception.',correct:true},
	{text:'Perception develops through learning.',correct:false},
	{text:'Perception result directly from sensation.',correct:false},
	]
},
{
	question:"Gestalt law of perception organize the visual scenes into:",
	answer:[
	{text:'complex structures',correct:false},
	{text:'simpler units',correct:true},
	{text:'Edged shapes',correct:false},
	{text:'None of these',correct:false},
	]
},
{
	question:"For the recognition of any scene, which of the following Gestalt principle is used:",
	answer:[
	{text:'Proximity',correct:false},
	{text:'Continuation',correct:false},
	{text:'Figure/Grounds',correct:true},
	{text:'Closure',correct:false},
	]
},
{
	question:"If we fill the gaps that are present in an image and then perceived a complete figure,that means we have following",
	answer:[
	{text:'Closure principle',correct:true},
	{text:'Priximity principle',correct:false},
	{text:'Continuity principke',correct:false},
	{text:'Similarity principle',correct:false},
	]
},
{
	question:"Which principle lead us one object to another to get it in a meaningful way, like in amazon logo.",
	answer:[
	{text:'Proximity principle',correct:false},
	{text:'Similarity principle',correct:false},
	{text:'Continuation principle',correct:true},
	{text:'None of these',correct:false},
	]
},
{
	question:"A single/coherent object achieved by combing different elements refers to:",
	answer:[
	{text:'Similarity',correct:false},
	{text:'Continuation',correct:true},
	{text:'Proximity',correct:false},
	{text:'All of thesse',correct:false},
	]
},
{
	question:"Standing onastreet corner, you observe three people crossing the street together. if you group that belong together, you are applying the principle of",
	answer:[
	{text:'Similarity',correct:true},
	{text:'Closure',correct:false},
	{text:'Continuation',correct:false},
	{text:'Simplicity',correct:false},
	]
},
{
	question:"According to Gestalt principle Good continuation means",
	answer:[
	{text:'We prefer  continuation of lines .',correct:false},
	{text:'involve lines that may be straight or curved',correct:false},
	{text:'We see line in a cross pattern may see two lines instead of two.',correct:false},
	{text:'All are correct',correct:true},
	]
},
{
	question:"Gestalt similarity states that ",
	answer:[
	{text:'Things are different from each other',correct:false},
	{text:'Our mind group items together that look alike',correct:true},
	{text:'Similarity of object is obtained by concentration',correct:false},
	{text:'it is based on completion of incomplete pictures',correct:false},
	]
},
{
	question:"Principle of figure/ground Helps us",
	answer:[
	{text:'To make small images on dark screen',correct:false},
	{text:"To perceive a separate image on screen first after then it's background",correct:true},
	{text:'To blend all picture pre on a screen',correct:false},
	{text:'all of these',correct:false},
	]
}
]
}





