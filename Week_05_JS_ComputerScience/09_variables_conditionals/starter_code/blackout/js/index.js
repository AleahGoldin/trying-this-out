var lights = "on";

function switchLights() {

	//if lights are on turn them off
if(lights == "on") {
	jQuery("body").addClass("dark");
	lights = "off";
}

	//else turn them on
else {
	jQuery("body").removeClass("dark");
	lights = "on"
}

}
//Bound to the ID light switch -- when I click it, it switches on this function
jQuery('#light_switch').click(switchLights);

 /* if(lights == "on"){
    jQuery('body').addClass('dark');
    lights = "off";
  }
  else {
    jQuery('body').removeClass('dark');
    lights = 'on';

  }
}
*/