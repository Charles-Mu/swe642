"use strict";
function cookie_greet()
{
cookie();
getGreet();

}
function cookie()
{
    var user_enter
    while(true)
    {
        user_enter = prompt("Enter your name:","");
    if (user_enter != "" && user_enter != null)
        break;
    }
    var user = getCookie("username");
    if (user == "Null"){
        window.alert("no users in cookie, will create " + user_enter);
    setCookie("username", user_enter, 3);
     document.getElementById("greetings2").innerHTML = "Hello! " + user_enter;
    } 
    else if(user != user_enter)
       { 
       window.alert("users not matched, the user in cookie is "+ user + ". Now username is reset to " + user_enter);
        deleteCookie("username");
         setCookie("username", user_enter, 3);
         document.getElementById("greetings2").innerHTML = "Hello! " + user_enter;
        }
    else 
        {
          //  window.alert("Welcome again " + user);
            document.getElementById("greetings2").innerHTML = "Hello again! " + user;
        }
}

function setCookie(name, value, days)
{
    var expire_milseconds = getLocalTime() + (days*24*60*60*1000);
    var expire_time = new Date(expire_milseconds).toUTCString();
    document.cookie = name + "=" + value + ";" + "expires=" + expire_time + ";path=/";
}

function deleteCookie(name)
{
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 UTC";
}

function getLocalTime()
{
    var d = new Date();
    var offset = d.getTimezoneOffset();
    var m = d.getTime()- offset*60000;
    return m;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "Null";
}
function getGreet()
{
    var m = getLocalTime();
    var c = new Date(m).toUTCString();
    var time_array = c.split(' ');
    var greetings = "Good";
    for(var j = 0; j < time_array.length; j++)
    {
        var u = time_array[j];
            while (u.charAt(0) == ' ') {
            u = u.substring(1);
        }
        if(u.indexOf(":") != -1)
        {
            var hour = parseInt(u.substring(0, 2));
            //return hour;
            if ((0 < hour && hour< 6)|| (20 < hour  && hour< 24))
                greetings = "Good Night ";
            else if (6 <= hour && hour< 12)
                greetings = "Good Morning ";
            else if (12 <= hour && hour < 17)
                greetings = "Good Afternoon ";
            else greetings = "Good Evening ";
        }
    }
document.getElementById("greetings1").innerHTML =  greetings + " Welcome to Assignment#3";
}

