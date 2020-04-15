/*
    Project    : Bus Reservation System
    Started on : 07 January 2020
    Updated on : 15 April 2020
    Mentor     : Thenarasi Rajendran
    Developer  : Vaishnavi Bandlamudi
    This File includes two javascript validation scripts of login and registration web pages
*/
// *********************************** Login Page ********************************************
function checkLoginCredentials()
{
var username=document.getElementById("name").value;
var userPassword=document.getElementById("pass").value;
var users=["hari","krishna","rama","sai","vaishnavi"];
var passwords=["hari2233","krishna207","abcd","sai9090","vaishu57"];
for(i=0;i<users.length;i++)
{
  
     if(username==users[i] && userPassword==passwords[i])
    {
      document.getElementById('pass').style.borderColor='lightgreen';
      document.getElementById('name').style.borderColor='lightgreen';
        location.replace("registrationPage.html");
       break;
    }
    else if(i==(users.length-1))
     {
        document.getElementById('name').style.borderColor='red';
        document.getElementById('pass').style.borderColor='red';        
        
     }
    
 }
}

// *********************************** Registration Page *************************************

function checkMonth()
{
    var month=document.getElementById('Month').value;
    if(month=='2')
    {
        document.getElementById('29').style.display='none';
        document.getElementById('30').style.display='none';
        document.getElementById('31').style.display='none';
    }
    else if(month=='4'||month=='6'||month=='9'||month=='11')
    {
      document.getElementById('29').style.display='block';
      document.getElementById('30').style.display='block';
      document.getElementById('31').style.display='none';
    }
    else
    {
        document.getElementById('29').style.display='block';
        document.getElementById('30').style.display='block';
        document.getElementById('31').style.display='block';
    }
}

function checkName()
{
  var name=document.getElementById('firstName').value;
  var fname=/^[A-Z a-z]{3,20}$/; 
   if(!fname.test(name) || name==" ")
   {
      document.getElementById('firstName').style.borderColor='red';
      return false;
   }
   else
   {
      document.getElementById('firstName').style.borderColor='lightgreen';
      return true;
   }
}
 
function checkMail()
{
  var mail=document.getElementById("mail").value;
  var emailExpression=/^([A-Z a-z 0-9]+)@([a-z A-Z 0-9]+).([a-z]{2,4})$/;
  if(!emailExpression.test(mail))
  {
    document.getElementById('mail').style.borderColor='red';
    return false;
 }
 else
 {
    document.getElementById('mail').style.borderColor='lightgreen';
    return true;
 }
}

function checkPassword()
{
  var password=document.getElementById('password').value;
  var cnfPassword=document.getElementById('confirmPassword').value;
  var passwordExpression=/^[A-Z a-z 0-9]{8,30}$/;
  if(password!=cnfPassword || !passwordExpression.test(password))
  {
    document.getElementById('confirmPassword').style.borderColor='red';
    return false;
  }
  else
  {
    document.getElementById('confirmPassword').style.borderColor='lightgreen';
    document.getElementById('password').style.borderColor='lightgreen';
    return true;
  }
}

function checkNumber()
{
  var number=document.getElementById("number").value;
  var numberExpression=/^[7-9]\d{9}$/;
  if(!numberExpression.test(number))
  {
    document.getElementById('number').style.borderColor='red';
    return false;
 }
 else
 {
    document.getElementById('number').style.borderColor='lightgreen';
    return true;
 }
}

function checkAddress()
{
  var address=document.getElementById("address").value;
  var addressExpression=/^[A-Z a-z 0-9]{3,300}$/;
  if(!addressExpression.test(address))
  {
    document.getElementById('address').style.borderColor='red';
    return false;
 }
 else
 {
    document.getElementById('address').style.borderColor='lightgreen';
    return true;
 }
}

function checkDate()
{
  var Day=document.getElementById('Day').value;
  var Month1=document.getElementById('Month').value;
  var Year1=document.getElementById('Year').value;
  if(Day=="0")
  {
     document.getElementById('Day').style.borderColor='red';
  }
  else if(Month1=="0")
  {
     document.getElementById('Month').style.borderColor='red';
  }
  else if(Year1=="0")
  {
    document.getElementById('Year').style.borderColor='red';
  }
  alert(Day+Month1+Year1);
  if(Day!="0" && Month1!="0" && Year1!="0")
  {
    document.getElementById('Day').style.borderColor='lightgreen';
    document.getElementById('Month').style.borderColor='lightgreen';
    document.getElementById('Year').style.borderColor='lightgreen';
    return true;
  }
  else
  {
    return false;
  }

}

function checkFormData()
{
  
  var values=document.getElementsByClassName('values');
  var count=0;
  for(i=0;i<values.length;i++)
  {
       if(values[i].checked==true)
       {
           ++count;
       }
  }
   if(count==0)
    {
        document.getElementById('box').style.visibility="visible";
         
    }
    else{
      document.getElementById('box').style.visibility="hidden";
    }
    var name=checkName();
    var password=checkPassword();
    var number=checkNumber();
    var mail=checkMail();
    var address=checkAddress();
    var date=checkDate();
  
    if(name==true && password==true && number==true && date==true && mail==true && address==true && count!=0)
    {
       alert('You have been successfully registered');
       location.replace('loginPage.html');
    }
}
