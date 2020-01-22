function check()
{

    var nameValid=0,mailValid=0,numberValid=0,passwordValid=0,addressValid=0,dayValid=0;
    var emptyFields=0,halfFilled=0;
     var name=document.getElementById("firstname").value;
     var lastname=document.getElementById("lastname").value;
     var number=document.getElementById("number").value;
     var mail=document.getElementById("mail").value;
     var pass1=document.getElementById('pass1').value;
     var pass2=document.getElementById('pass2').value;
     var address=document.getElementById('address').value;
     var values=document.getElementsByClassName('value');
     var str='';
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
      /*
          Regular Expression to match Name
     */
     var fname=/^[A-Z a-z]{3,20}$/;
      /*
          Regular Expression to match Password
     */
     var password=/^[A-Z a-z 0-9]{8,30}$/;
      /*
          Regular Expression to match Mobile Number
     */
     var mobileNumber=/^[7-9]\d{9}$/;
      /*
          Regular Expression to match Email
     */
     var email=/^([A-Z a-z 0-9]+)@([a-z A-Z 0-9]+).([a-z]{2,4})$/;
      /*
          Regular Expression to match address
     */
     var Address1=/^[A-Z a-z 0-9]{3,300}$/;

     var day;

     var count=0;

     var x=document.getElementById("Month");

     var x1=document.getElementById("Day");

     var year=document.getElementById("Year");

     var y=x.options[x.selectedIndex].value;

     var y1=x1.options[x1.selectedIndex].value;
     /*
          All fields are empty
     */
     if(name=="" && mail=="" && pass1=="" && pass2=="" && address=="" && lastname=="" && number=="")
     {

         alert("Kindly fill all fields");
         emptyFields=1;
        

     }
     /*
          All few fields are empty
     */
     else if(name=="" || mail=="" || pass1=="" || pass2=="" || address=="" || lastname=="" || number=="")


     {

         alert("Kindly fill remaining fields");
         halfFilled=1;


     }
     else 

     {
         /*
           checking the name whether it matches the Regular Expression
         */
         if(!fname.test(name))

        {
             document.getElementById("Name1").style.visibility="visible";
             nameValid=1;

        }

       else

        {

             document.getElementById("Name1").style.visibility="hidden";
             nameValid=0;

         }
         /*
           checking the Password whether it matches the Regular Expression
         */

       if(pass1!=pass2 || !password.test(pass1))

        {
            document.getElementById("Password1").style.visibility="visible";

            passwordValid=1;

        }

        else

        {

             document.getElementById("Password1").style.visibility="hidden";

             passwordValid=0;

        }           
        /*
           checking the Email whether it matches the Regular Expression
         */
        if(!email.test(mail))
        {
            document.getElementById("Email1").style.visibility="visible";
            mailValid=1;
              
        }

        else
        {
            document.getElementById("Email1").style.visibility="hidden";
            mailValid=0;

        }
        if(y==2 || y==4 || y==6 || y==9 || y==11)
       {
           if (y==2)

           {
                   if(y1>28)

                   {
                     document.getElementById("Day1").style.visibility="visible";

                     dayValid=1;
                   }

                 else

                  {
                          document.getElementById("Day1").style.visibility="hidden";
                          dayValid=0;

                  }

           }

           else

          {

              if(y1==31)

              {                   
                    document.getElementById("Day1").style.visibility="visible";
                    dayValid=1;

              }

             else

             {

                       document.getElementById("Day1").style.visibility="hidden";
                       dayValid=0;

             }

          }    

      }    
        /*
           checking the Address whether it matches the Regular Expression
         */
      if(!Address1.test(address))

        {     

          document.getElementById("Ad1").style.visibility="visible";
           addressValid=1;
          }
          else 

          {
                 document.getElementById("Ad1").style.visibility="hidden";
                 addressValid=0;

          }
        /*
           checking the number whether it matches the Regular Expression
         */
      if(!mobileNumber.test(number))

     {

          document.getElementById("Number1").style.visibility="visible";
          numberValid=1;

     }

     else

    {

          document.getElementById("Number1").style.visibility="hidden";
          numberValid=0;

    }

    var count=0;
   /*
          Count is required to know whether any checkbox is selected or not
  */
    for(i=0;i<values.length;i++)
   {


       if(values[i].checked==false)
       {

           ++count;

       }

   }
  /*
          if count==4 then no check box is selected.
 */
    if(count==4)

    {

          document.getElementById("Boxes").style.visibility="visible";

    }

    else

    {

          document.getElementById("Boxes").style.visibility="hidden";

    }

 }
 /*
          All the validation and required fields are filled so it is redirected to Login page 
 */
     if(nameValid==0 && passwordValid==0 && mailValid==0 && numberValid==0 && dayValid==0 && addressValid==0 && emptyFields==0 && halfFilled==0)

     {

            alert("You are Registered successfully");
            location.replace("loginPage.html");

     }  
   
 }

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
		    alert("Login Success");
		
           location.replace("registration.html");
           break;
        }
    	else if(i==(users.length-1))
	      {
		    alert("Invalid Login");
		    location.reload();
	      }
    }
}
