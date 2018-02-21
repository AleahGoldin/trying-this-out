
//Event of clicking the button
document.getElementById("grayButton").onclick = switchGray;
document.getElementById("whiteButton").onclick = switchWhite;

//GrayScreen is when the screen background color becomes gray and text becomes white
function switchGray() {
	document.body.style.backgroundColor = "gray";
	document.body.style.color ="white";
}

//WhiteScreen is when the screen background becomes white and the the text becomes gray
function switchWhite() {
	document.body.style.backgroundColor = "white";
	document.body.style.color ="gray";
}