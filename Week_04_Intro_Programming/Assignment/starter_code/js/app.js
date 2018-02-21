
//Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded 
	//$( document ).ready(function() {Handler for .ready() called.})
$(document).ready(function () {

//Prevent a link execution with the ```event.preventDefault()``` function  
//Select the appropriate DOM elements with CSS selectors upon a user's click using the ```$.click()``` handler
//Have the text in the `````` tag slide down along with a "Read Less" link in the blog post using,```$.slideDown()``` and ```$.show()```                             
//Hide the "Read More" link using ```$.hide()``
	//Clicks on Read More
		$('.readmore').click(function(event) {
				event.preventDefault();
				$('#show-this-on-click').slideDown('slow');
				$('.readmore').hide();
				$('.readless').show();
		});
//Have the `````` slide up and hide the "Read Less" link using,```$.slideUp()``` and ```$.hide()``` 
//Show the "Read More" link using ```$.show()```  
		$('.readless').click(function(event) {
				event.preventDefault();
				$('#show-this-on-click').slideUp('fast', function () {
					$('.readless').hide();
					$('.readmore').show();
				});
				// $('.readless').hide()
				// $('.readmore').show();
		});

//Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, have the `````` inside that `````` slide down and hide the "Learn More" link using ```$.slideDown()``` and ```$.hide()``` |         
		$('.learnmore').click(function(event) {
				event.preventDefault();
				$('.learnmore').hide()
				$('#learnmoretext').show();
		});

});