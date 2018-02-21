
//When clicked do the following:
document.getElementById('stopButton').onclick = red;
document.getElementById('slowButton').onclick = yellow;
document.getElementById('goButton').onclick = green;

//Need to turn black to red (#stopLight)
function red() {
clearAll();
document.getElementById('stopLight').style.backgroundColor = "red";
}


//Need to turn black to yellow (#slowLight)
function yellow() {
clearAll();
document.getElementById('slowLight').style.backgroundColor="yellow";
}

//Need to turn black to green (#goLight)
function green() {
	clearAll();
	document.getElementById('goLight').style.backgroundColor="green" 
}


//Also need to clear all other bulbs (.bulbs)
function clearAll() {
	document.getElementById('stopLight').style.backgroundColor="black"
	document.getElementById('slowLight').style.backgroundColor="black"
	document.getElementById('goLight').style.backgroundColor="black"
}
