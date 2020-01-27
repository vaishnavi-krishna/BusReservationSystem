/*
    Project    : Bus Reservation System
    Started on : 07 January 2020
    Updated on : 27 January 2020
    Mentor     : Thenarasi Rajendran
    Developer  : Vaishnavi Bandlamudi

***********************************Registration Page JavaScript************************************* 

*/

function chkblnk(eid,errid)
{
var x=document.getElementById(eid).value;
if(x=="")
{
document.getElementById(errid).innerHTML="please fill this field";

}
else
{
document.getElementById(errid).innerHTML="";
}
}


function chkName()
{
    var name=document.getElementById("fn").value;
    var fname=/^[A-Z a-z]{3,20}$/;
    if(!fname.test(name))
    {
       document.getElementById("error").innerHTML="Invalid";
    }
   else
    {
        document.getElementById("error").innerHTML="";
    }

}

function chkEmail()
{

    var mail=document.getElementById("mail").value;
    var email=/^([A-Z a-z 0-9]+)@([a-z A-Z 0-9]+).([a-z]{2,4})$/;
    if(!email.test(mail))
    {
       document.getElementById("error2").innerHTML="Invalid";
    }
   else
    {
        document.getElementById("error2").innerHTML="";
    }

}

function chkPassword()
{

    var pass1=document.getElementById('pass1').value;
    var pass2=document.getElementById('pass2').value;
    var password=/^[A-Z a-z 0-9]{8,30}$/;
    if(pass1!=pass2 || !password.test(pass1))
    {
       document.getElementById("error4").innerHTML="Invalid";
    }
   else
    {
        document.getElementById("error4").innerHTML="";
    }

}

function chkNumber()
{
    var number=document.getElementById("number").value;
    var mobileNumber=/^[7-9]\d{9}$/;
    if(!mobileNumber.test(number))
    {
       document.getElementById("error5").innerHTML="Invalid";
    }
   else
    {
        document.getElementById("error5").innerHTML="";
    }

}

function chkAddress()
{
    var address=document.getElementById('adds').value;
    var Address1=/^[A-Z a-z 0-9]{3,300}$/;
    if(!Address1.test(address))
    {
       document.getElementById("error6").innerHTML="Invalid";
    }
   else
    {
        document.getElementById("error6").innerHTML="";
    }

}

function check()
{

    var name=document.getElementById("fn").value;
     var lastname=document.getElementById("ln").value;
     var number=document.getElementById("number").value;
     var mail=document.getElementById("mail").value;
     var pass1=document.getElementById('pass1').value;
     var pass2=document.getElementById('pass2').value;
     var address=document.getElementById('adds').value;
     var values=document.getElementsByClassName('value');
     var str='';
     var Address1=/^[A-Z a-z 0-9]{3,300}$/;
     var mobileNumber=/^[7-9]\d{9}$/;
     var password=/^[A-Z a-z 0-9]{8,30}$/;
     var email=/^([A-Z a-z 0-9]+)@([a-z A-Z 0-9]+).([a-z]{2,4})$/;
     var fname=/^[A-Z a-z]{3,20}$/;
      /*
          Storing the selected bus type in variable : "str"
     */
     for(i=0;i<values.length;i++)
     {
         if(values[i].checked==true)
         {

             str+=("\n"+values[i].value);

         }

     }
var count=0;

var x=document.getElementById("Month");

var x1=document.getElementById("Day");

var year=document.getElementById("Year");

var month=x.options[x.selectedIndex].value;

var day=x1.options[x1.selectedIndex].value;

for(i=1;i<=12;i++)
{
    if (month==2)

        {
             if(day>28)

             {
                 document.getElementById("Day1").style.visibility="visible";
               
             }

             else
             {
                 document.getElementById("Day1").style.visibility="hidden";
                 
             }
             break;
        }
        else if((month%2!=0 && month<=7) || (month%2==0 && month>7))
        {
                 document.getElementById("Day1").style.visibility="hidden";
                 break;
        }
        else
        {
            if(day==31)
            {                  
                document.getElementById("Day1").style.visibility="visible";
                
            }
            else
            {

                 document.getElementById("Day1").style.visibility="hidden";
            }
        }
 }
 
 for(i=0;i<values.length;i++)
   {
       if(values[i].checked==true)
       {
           ++count;
       }
   }
   if(count==0)
    {
        document.getElementById("Boxes").style.visibility="visible";
         
    }
    else
    {
         
        document.getElementById("Boxes").style.visibility="hidden";
    }

    if( fname.test(name) && email.test(mail) && password.test(pass1) && pass1==pass2 && mobileNumber.test(number) && Address1.test(address) && count>=1 && document.getElementById("Day1").style.visibility=="hidden")
    {
            alert("You have registered successfully");
            location.replace("loginPage.html");
    }

}

/*

***********************************Login Page JavaScript************************************* 

*/
function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
/*
    Few UserID Credentials are given default
*/
var users=["hari","krishna","rama","sai","vaishnavi"];
var passwords=["hari2233","krishna207","abcd","sai9090","vaishu57"];
/*
     checking the username and password using for loop        
*/
for(i=0;i<users.length;i++)
{
     if(username==users[i] && password==passwords[i])
    {
        document.getElementById('validation').style.visibility="visible";
        document.getElementById('validationError').style.visibility="hidden";
        location.replace("registration.html");
       break;
    }
    else if(i==(users.length-1))
      {
        document.getElementById('validationError').style.visibility="visible";
        
      }
}
}
