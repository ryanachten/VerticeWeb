$(document).foundation();

function scrollUpAndCrossfadeInto(section){

	if ($(section).is(":visible")){
		smoothScroll.animateScroll(0);
		return;
	}

	smoothScroll.animateScroll(0, null, {

		callback: function(){

			$(".background-section:visible").fadeOut(200, function(){
				$(section).fadeIn(200);
			});
		}
	});
}


function showDesign(){

	scrollUpAndCrossfadeInto('.design-section');
}

function showMetadata(){

	scrollUpAndCrossfadeInto('.metadata-section');
}

function showTechnology(){
	scrollUpAndCrossfadeInto('.technology-section');
	
}