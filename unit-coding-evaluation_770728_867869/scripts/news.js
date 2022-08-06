import navbar from "../components/navbar.js"
let navDiv = document.getElementById("navbar");
navDiv.innerHTML = navbar();
let userdata = JSON.parse(localStorage.getItem("user"));
let container = document.querySelector("#sidenav");
console.log(userdata)
displayUser(userdata)
function displayUser(userdata){
    let box = document.createElement("div");

    let image = document.createElement("img");
    image.src = userdata.image
    let name = document.createElement("h3");
    name.innerText = userdata.name;

    let email = document.createElement("h4")
    email.innerText = userdata.email

    let country = document.createElement('h4')
country.innerText = userdata.country

box.append(image,name,email,country);
container.append(box);

}

let searchElem = document.getElementById("search1");

let searchInput = searchElem.addEventListener("keypress",featcAndUpdataData);

async function featcAndUpdataData(e){
    try {
        let searchParam = searchElem.value;
       if(e.key == "Enter"){
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${searchParam}`);
       
        let data = await res.json()
        
       
console.log(data)
displayData(data.articles);
       }
    //    
    } catch (error) {
        console.log(error)
    }
}

function displayData(data){
    data.forEach((news) => {
       let box = document.createElement("div");

       let image = document.createElement("img");
       image.src = news.urlToImage
            
       let author = document.createElement("h2")
       author.innerText = news.author;

       let cont = document.createElement("p")
       cont.innerText = news.content

       box.append(image,author,cont)
       document.getElementById("contant").append(box)
    });
}