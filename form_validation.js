function validation()
{
  var retval = true;
  //Use name validate
   var name = document.getElementById("username").value;
   var usercheck = (/^[a-zA-Z]+$/.test(name));
   if (usercheck==false)
   {
    clearFields("username");
    document.getElementById("name_error").innerHTML = "Should contain only Alphabets";
   retval = false;
   }
   else{
     document.getElementById("name_error").innerHTML = "";
   }
  //Address validate (also can contain space)
    var address = document.getElementById("street").value;
    var addcheck = (/^[a-zA-Z0-9 ]+$/).test(address);
   if (addcheck==false)
   {
    clearFields("street");
    document.getElementById("street_error").innerHTML = "Should contain only appropriate numeric, alphabet or alphanumeric characters";
   retval = false;
   }
   else{
    document.getElementById("street_error").innerHTML = "";
   }
  //Checkbox validate
  var count = checkboxCount();
  if (count < 2)
    {
    var elem = document.getElementsByTagName("input");
    for (var i=0; i<elem.length; i++) {
        if (elem[i].type === "checkbox")
         elem[i].checked = false;
     }
    document.getElementById("checkbox_error").innerHTML = "Should check at least two checkboxes";
   retval = false;
   }
   else{
    document.getElementById("checkbox_error").innerHTML ="";
   }
  //Check email
  var email = document.getElementById("email").value;
  //The regex of email refers from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var emailcheck = (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/).test(email);
   if (emailcheck==false)
   {
    clearFields("email");
    document.getElementById("email_error").innerHTML = "Should be a valid email";
   retval = false;
   }
   else{
    document.getElementById("email_error").innerHTML = "";
   }

return retval;
}



function checkboxCount()
{
    var elements = document.getElementsByTagName("input");
    var count = 0;
    for (var i=0; i<elements.length; i++) {
    if (elements[i].type === "checkbox" && elements[i].checked === true){
        count++;
        }
    }
    return count;
}
function clearFields(elementId)
{
  var elements = document.getElementsByTagName("input");
    for (var i=0; i < elements.length; i++) {
        if (elements[i].id == elementId) {
            elements[i].value = "";
            }
        }
}