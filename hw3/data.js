"use strict";
function data()
{
   var str = document.getElementById("data_numbers").value.trim();
   var str_array = str.split(",");
   var num_array=[];
   var error_flag=false;
   //print error if user did not ether at least 10 comma, witch is 11 numbers
   if (str_array.length < 11)
    {
        document.getElementById("error_message").innerHTML ="Please enter at least 11 numbers";  
        error_flag=true;
    return;
    }
    //push each numbers into a string array, print error if exists <=0 or >100 number  
    for(var i = 0; i < str_array.length; i++) {
        var str_now =str_array[i];
           while (str_now.charAt(0) == ' ') {
            str_now = str_now.substring(1);
        }
        var num = parseFloat(str_now);
        if (!isNaN(num))
        {    
            if(num <= 100 && num > 0)
              { 
               num_array.push(num);
            }
            else
                {
                    document.getElementById("error_message").innerHTML ="Please enter numbers between 1 and 100";
                    error_flag=true;
                    break;
               }
         }
    }
    if (!error_flag)
    {
        document.getElementById("error_message").innerHTML="";
        avg(num_array);
        max(num_array);
    }

}

function avg(num_array)
{
//calculate avg value
    var sum = 0;
  for(var i = 0; i< num_array.length; i++)
  {
    sum+=num_array[i];
  }
  document.getElementById("Avg_result").innerHTML = sum/num_array.length;
  
}
function max(num_array)
//calculate max value
{
    var max = 0;
  for(var i = 0; i< num_array.length; i++)
    {
        if (max < num_array[i])
        max = num_array[i];

    }
    document.getElementById("Max_result").innerHTML = max;
}