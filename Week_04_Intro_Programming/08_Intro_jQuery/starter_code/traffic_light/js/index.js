//Implement the red light using jQuery.
//Don't forget to add the script tags.function

//Red
function illuminateRed() {
	//Clear all the lights
	jQuery("#traffic-light > div").css("background","black");

	//Light red
	jQuery("#stopLight").css("background","red");
}

//Yellow
function illuminateYellow() {
	//Clear all the lights
	jQuery("#traffic-light > div").css("background","black");

	//Light yellow
	jQuery("#slowLight").css("background","yellow");
}

//Green

jQuery("#stopButton").click(illuminateRed);
jQuery("#slowButton").click(illuminateYellow);