 "use strict";
  $( function() {
    $( ".tabs" ).tabs();
  	$( ".ttip" ).tooltip({
 		position: { my: "center", at: "right-15 center" }
  		});
  	var position =  $( ".ttip" ).tooltip( "option", "position" );
  	$( ".ttip" ).tooltip( "option", "position", { my: "center", at: "right+15 center" } );
  } );

 