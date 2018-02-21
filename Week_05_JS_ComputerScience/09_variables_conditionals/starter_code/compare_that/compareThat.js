jQuery("#submit").click(function(){
//Get values
var a = jQuery ("#a").val();
var b = jQuery ("#b").val();

//This means your document has to be ready for this to load
jQuery(document).ready(function() {

//If A > B, show the > sign
if(a > b) {
	jQuery("#comparison").text(">");
}

//If A< B, show the < sign

if(b > a) {
	jQuery("#comparison").text("<");
}

//If A = B, show the =sign
if (a == b) {
	jQuery("#comparison").text("==");
}

//detect if they aren't numbers
if(isNaN(a) || isNaN(b)) {
	jQuery("#comparison").text("NaN");
};

});

//This is the closing bracket set from the document ready
});