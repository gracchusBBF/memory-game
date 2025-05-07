import {testMail} from "./emailValidator.js"
import { testPwd } from "./pwdValidator.js";
const submitBu = document.getElementById("submitBu");
const userName = document.getElementById("name")
const userEmail = document.getElementById("email")
const userPwd = document.getElementById("pwd")
const pwdConfirm = document.getElementById("pwdConfirm")
submitBu.addEventListener("click", function (event) {
    
    mailForm();
    nameForm();
    pwdForm();
    testMatch();
    register();
});
userEmail.addEventListener("blur", mailForm)
userName.addEventListener("blur", nameForm)
userPwd.addEventListener("blur", pwdForm)
pwdConfirm.addEventListener("blur", testMatch)

function register(){
    event.preventDefault();
    if (userName.classList.contains("is-valid") && userEmail.classList.contains("is-valid") && userPwd.classList.contains("is-valid") && pwdConfirm.classList.contains("is-valid")){
        const currentUser = {
            name : userName.value,
            email : userEmail.value,
            pwd : userPwd.value
        }
        const currentUserData = JSON.stringify(currentUser)
        localStorage.setItem("currentUserDatas", currentUserData)
        location.href = "profil.html";
    }else{
        alert("respect mofo")
    }
}
function mailForm(){
    
    
    if(!testMail(userEmail.value)){
        console.log(testMail(userEmail));
        userEmail.classList.remove("is-valid")
        userEmail.classList.add("is-invalid")
    } else { 
        console.log("email valid");
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid"); 
        
         }
 }
 function nameForm(){
     console.log(userName.value.length);
    if(userName.value.length<3){
        userName.classList.remove("is-valid")
        userName.classList.add("is-invalid")
    }else{
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
    }
 }
function pwdForm() {


    if (!testPwd(userPwd.value)) {
        
        userPwd.classList.remove("is-valid")
        userPwd.classList.add("is-invalid")
    } else {
        console.log("email valid");
        userPwd.classList.remove("is-invalid")
        userPwd.classList.add("is-valid");

    }
}
function testMatch(){
    if(pwdConfirm.value === userPwd.value){
        pwdConfirm.classList.remove("is-invalid")
        pwdConfirm.classList.add("is-valid")
    }else{
        pwdConfirm.classList.remove("is-valid")
        pwdConfirm.classList.add("is-invalid")
    }
} 