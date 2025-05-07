const datasToParse = localStorage.getItem("currentUserDatas")
const userDatas = JSON.parse(datasToParse)
console.log(userDatas);
document.getElementById("welcome").innerHTML += `${userDatas.name}!`

let avatarVoid = document.getElementById("voidAvatar")
avatarVoid.addEventListener("click", choosePic)

function choosePic(){
    const img = document.getElementById("img")
    const fileInput = document.getElementById("myFile");
    fileInput.click();
    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onload = (e) => {
                img.src = e.target.result; // Met à jour la balise <img>
            };

            reader.readAsDataURL(file);
        }
    })
}