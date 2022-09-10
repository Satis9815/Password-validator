console.log("Welcome to the password validator");
let password=document.getElementById('password')
let toggleBtn=document.getElementById('toggleBtn');

let lowerCase=document.getElementById('lower');
let upperCase=document.getElementById('upper');
let num=document.getElementById('number');
let special=document.getElementById('special');
let minLength=document.getElementById('length');

// Show and hide the password 
toggleBtn.onclick=function(){
    if(password.type==='password'){
        password.setAttribute('type','text');
        toggleBtn.classList.add('hide');
    }
    else{
        password.setAttribute('type','password');
        toggleBtn.classList.remove('hide');
    }
}

function checkPassword(data){
    // javascript regular expression pattern 
    const regLowerPattern=new RegExp('(?=.*[a-z])');
    const regUpperPattern=new RegExp('(?=.*[A-Z])');
    const regNumPattern=new RegExp('(?=.*[0-9])');
    const regSpecialCharPattern=new RegExp('(?=.*[!@#\$%\^&\*])');
    const regMinLengthPattern=new RegExp('(?=.{8,})');

    // lowercase check validation
    if(regLowerPattern.test(data)){
        lowerCase.classList.add('valid');
    }
    else{
        lowerCase.classList.remove('valid')
    }

    // Uppercase check validation
    if(regUpperPattern.test(data)){
        upperCase.classList.add('valid');
    }
    else{
        upperCase.classList.remove('valid')
    }
    // Number check validation
    if(regNumPattern.test(data)){
        num.classList.add('valid');
    }
    else{
        num.classList.remove('valid')
    }
    // Special character check validation
    if(regSpecialCharPattern.test(data)){
        special.classList.add('valid');
    }
    else{
        special.classList.remove('valid')
    }
    // Minimum length check validation
    if(regMinLengthPattern.test(data)){
        minLength.classList.add('valid');
    }
    else{
        minLength.classList.remove('valid')
    }


}