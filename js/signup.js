// Set Max of date input to today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0
var yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}
if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("dateInput").setAttribute("max", today);

function validateForm(){

    // Username Validation
    var name = document.forms['register']['Username'].value;
    if(name.length < 5){
        alert("Username must be longer than 5 characters");
        return false;
    }

    // Email Validation
    var email = document.forms['register']['Email'].value;
    var atSymbolIdx = email.indexOf("@");


    if(atSymbolIdx < 1){
        alert("Invalid Email");
        return false;
    }else if(!email.includes('gmail.com', 'yahoo.com', 'binus.ac.id')){
        alert("Invalid email provider");
        return false;
    }
    
    // Password Validation
    var password = document.forms['register']['Password'].value;

    var lowerCaseLetters = /[a-z]/g;
    if(!password.match(lowerCaseLetters)) {
        alert("Password requires LowerCase");
        return false;
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(!password.match(upperCaseLetters)) {
        alert("Password requires UpperCase");
        return false;

    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if(!password.match(numbers)) {
        alert("Password requires Numbers");
        return false;
    }

    // Validate length
    if(password.length < 7) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    // Validate Confirm_password 
    var confirm_password = document.forms['register']['Conf_Pass'].value;

    if(password != confirm_password){
        alert("Passwords do not match !!!");
        return false;
    }

    // Validate date
    var UserDate = document.forms['register']['Date'].value;
    var ToDate = new Date();

    if(new Date(UserDate).getTime() >= ToDate.getTime()) {
          alert("Invalid Date");
          return false;
     }else if((ToDate.getFullYear() - new Date(UserDate).getFullYear()) < 9){
        alert("You must be at least 10 years old !");
        return false;
     }

         window.location.href = "../html/website.html";

}   