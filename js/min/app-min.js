"use strict";function scrollUpAndCrossfadeInto(o){return $(o).is(":visible")?void smoothScroll.animateScroll(0):void smoothScroll.animateScroll(0,null,{callback:function n(){$(".background-section:visible").fadeOut(200,function(){$(o).fadeIn(200)})}})}function showDesign(){scrollUpAndCrossfadeInto(".design-section")}function showMetadata(){scrollUpAndCrossfadeInto(".metadata-section")}function showTechnology(){scrollUpAndCrossfadeInto(".technology-section")}$(document).foundation();