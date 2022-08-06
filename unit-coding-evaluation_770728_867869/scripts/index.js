/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
import navbar from "../components/navbar.js"
let navDiv = document.getElementById("navbar");
navDiv.innerHTML = navbar();
let userdata = JSON.parse(localStorage.getItem("user")) 
let userData = document.querySelector("form").addEventListener("submit",getUserData);
console.log(userdata)
function getUserData(){
    event.preventDefault()
    let user = {
        name : document.getElementById("user_name").value,
        image : document.getElementById("user_pic").value,
        email : document.getElementById("user_email").value,
        country : document.getElementById("user_country").value
    }
    console.log(user.country)
    localStorage.setItem("user",JSON.stringify(user))
}