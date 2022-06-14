const stringRegEx = /^[a-zA-Z]+$/;
const numberRegEx = /^[0-9]{10}$/;
const passwordRegEx = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&?@* "])[a-zA-Z0-9!#$%&?@*]{8,20}$/;
const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,6}$/; 

const signup = document.querySelector("#signup");
const email = document.querySelector("#email");
const firstname = document.querySelector("#firstName");
const lastname = document.querySelector("#lastName");
const createPassword = document.querySelector("#createPassword");
const reEnterPassword = document.querySelector("#reEnterPassword");
const phonenumber = document.querySelector("#phoneNumber");
const agreeterms = document.querySelector("#agreeTerms");

signup.onclick = function(){
    if(firstname.value.length ===0 ){
        if(firstname.value.includes(" ")  ){
            console.log("First Name must contain a single word");
            const emailClassList = document.querySelector('#firstValidationMsg').classList;
            emailClassList.remove('d-none');
            document.querySelector('#firstValidationMsg').classList = document.querySelector('#firstValidationMsg').classList;  
        }else{
            console.log("First Name does not be empty");
            const firstClassList = document.querySelector('#firstValidationMsg').classList;
            firstClassList.remove('d-none');
            document.querySelector('#firstValidationMsg').classList = document.querySelector('#firstValidationMsg').classLis
        }  
    }else if(lastname.value.length ===0){
        console.log("Last Name does not be empty");
        document.querySelector('#firstValidationMsg').className = "text-white d-none"
        const lastClassList = document.querySelector('#lastValidationMsg').classList;
        lastClassList.remove('d-none');
        document.querySelector('#lastValidationMsg').classList = document.querySelector('#lastValidationMsg').classList;
    }else if(!emailRegEx.test(email.value)){
        console.log("Enter a Valid Email");
        document.querySelector('#lastValidationMsg').className = "text-white d-none"
        const emailClassList = document.querySelector('#emailValidationMsg').classList;
        emailClassList.remove('d-none');
        document.querySelector('#emailValidationMsg').classList = document.querySelector('#emailValidationMsg').classList;
    }else if(!passwordRegEx.test(createPassword.value)){
        console.log("Password is not Valid");
        document.querySelector('#emailValidationMsg').className = "text-white d-none"
        const passwordClassList = document.querySelector('#createPasswordValidationMsg').classList;
        passwordClassList.remove('d-none');
        document.querySelector('#createPasswordValidationMsg').classList = document.querySelector('#createPasswordValidationMsg').classList;
    }else if(createPassword.value != reEnterPassword.value){
        console.log("Password is not the same as entered above");
        document.querySelector('#createPasswordValidationMsg').className = "text-white d-none"
        const repasswordClassList = document.querySelector('#reEnterPasswordValidationMsg').classList;
        repasswordClassList.remove('d-none');
        document.querySelector('#reEnterPasswordValidationMsg').classList = document.querySelector('#reEnterPasswordValidationMsg').classList;
    }else if(!(numberRegEx.test(phonenumber.value) && phonenumber.value[0])){
        console.log("Phone Number must contain 10 digits and doesnot start with 0");
        document.querySelector('#reEnterPasswordValidationMsg').className = "text-white d-none"
        const phoneClassList = document.querySelector('#phoneValidationMsg').classList;
        phoneClassList.remove('d-none');
        document.querySelector('#phoneValidationMsg').classList = document.querySelector('#phoneValidationMsg').classList;
    }else{
        document.querySelector('#phoneValidationMsg').className = "text-white d-none"
        console.log("SignUp Success............")
        window.location.href = "cardjs.html";
    }
} 