"use strict";
function addressAuto()
{
	$.ajax({
		url: "address.json",
		type: 'GET',
		dataType: 'json',
	 success: function (data) {
	 	//Json has already been parsed in 'data'
	 	console.log(data.zipcodes[0].zip);
	 	showdata(data);
	 },
	   error: function(jqXHR, textStatus) {
      console.log("request failed" +textStatus);
    }
	});
}

function showdata(data)
{
if(data.zipcodes)
{
	var zipinput = document.getElementById("zip").value;
	console.log(zipinput);
	var i=0;
	for(i=0; i<data.zipcodes.length; i++)
	{
		if (data.zipcodes[i].zip == zipinput)
			break;
	}
	if (i < data.zipcodes.length)
	{
		$("#zip_error").html("");
		$("#city").attr('value', (data['zipcodes'][i]['city']));
		$("#state").attr('value', (data['zipcodes'][i]['state']));
	}
	else 
		$("#zip_error").html("an invalid zip");

}
}