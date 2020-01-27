//5 digit pin validation on USERS REGISTRATION//
pinValidation = function validatePin(){
    var pinGood = document.getElementById('pin').value;
    if(pinGood.length < 5){
        document.getElementById('pin_msg').innerHTML="Pin shorter than 5 digit";
        document.getElementById('pin_msg').style.color="red";
    }else if(pinGood.length > 5){
        document.getElementById('pin_msg').innerHTML="Pin longer than 5 digit";
        document.getElementById('pin_msg').style.color="red";   
    }else{
    }
}


//mobile number format//
new Cleave('#mobile-number', {
    phone:true,
    phoneRegionCode:'NG'
});
$('#select-country').change(function(){ //adding multiple countries
    cleave.setPhoneRegionCode(this.value);
    cleave.setRawValue('');
})

//The mobile number format clashes with the creditcard format, don't know why.
// Its either you remove the mobile number format for the creditcard to work 
//The mobile number format works with both formats except the creditcard
//I used Cleave.js framework

//Creditcard format
new Cleave('#month', {
    numeral:true,
});
new Cleave('#year', {
    numeral:true,
});
new Cleave('#cvv', {
    numeral:true,
});
new Cleave('#card-number', {
    creditCard:true,
    
});
