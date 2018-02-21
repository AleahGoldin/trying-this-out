//Hide all the answers
$(".answer").hide();

//Functions to toggle the answers
function eyrnt1() {
$("#answer1").slideToggle();
}

function eyrnt2() {
$("#answer2").slideToggle();
}

function eyrnt3() {
$("#answer3").slideToggle();
}

//Bind the functions to clicks
$("#question1").click(eyrnt1);
$("#question2").click(eyrnt2);
$("#question3").click(eyrnt3);