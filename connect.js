const button = document.getElementById("connectBu")
const inputPwd = document.getElementById("uPwd")
const inputName = document.getElementById("uName")
button.addEventListener("click", checkIdPwd)
function checkIdPwd(){
    const datasToParse = localStorage.getItem("currentUserDatas")
    const userDatas = JSON.parse(datasToParse)
    const givenName = inputName.value;
    const givenPwd = inputPwd.value;
    if(givenName === userDatas.name && givenPwd===userDatas.pwd){
        location.href = "profil.html";
    }
    else if (givenName === userDatas.name && givenPwd !== userDatas.pwd){
        alert("wrong password")
    }
    else if (givenPwd === userDatas.pwd && givenName !== userDatas.name){
        alert("we dont know you yet!")
    }
}