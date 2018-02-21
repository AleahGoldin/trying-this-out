
//defines function addMe
function addMe(first,second){

}// end addMe

//document ready function for whole thing besides function definition
jQuery(document).ready(function () {

//For read more
//When you click on read more -- prevent the default, slide down, hide, show
    jQuery('.readmore').click(function (e) {
        e.preventDefault();
        jQuery('#show-this-on-click').slideDown();
        jQuery('.readmore').hide();
        jQuery('.readless').show();
    });

//when you click on read less the same
    jQuery('.readless').click(function (e) {
        e.preventDefault();
        jQuery('#show-this-on-click').slideUp();
        jQuery('.readless').hide();
        jQuery('.readmore').show();
    });

//When you click on learn more the same
    jQuery('.learnmore').click(function (e) {
        e.preventDefault();
        jQuery('#learnmoretext').slideDown();
        jQuery('.learnmore').hide();
    });

});