    function clear()
    {
        error = document.getElementsByClassName('ferr'); 
        for( let item of error){
            item.innerHTML = "";
            
        }
    }

    function seterror(id, error)
    {
        // sets error inside tags of id// 
        
        element = document.getElementById(id);
        element.getElementsByClassName("ferr")[0].innerHTML = error;


    }

function validateform()
{
    var returnval = true;
    clear();

    // perfom va;idation and if validation false , thenm it returnval to false//
    var name = document.forms['myform']['fname'].value;

        if(name.length<5){
            seterror("name", "*Length of name is to short");
            returnval = false;
        }

        var email = document.forms['myform']['femail'].value;

        if(email.length>15){
            seterror("email", "*Length of email to long");
            returnval = false;
        }
        
        var phone = document.forms['myform']['fphone'].value;

        if(phone.length!=10){
            seterror("phone", "* phone number is in valid");
            returnval = false;
        }

        var password = document.forms['myform']['p'].value;

        if(password.length<8){
            seterror("password", "* minimum character should be of 8 char");
            returnval = false;
        }

        if(cpassword != password){
          seterror("cpassword", "*passwrd and confirm password should match!!");
          returnval = false;
      }




    return returnval;
}


