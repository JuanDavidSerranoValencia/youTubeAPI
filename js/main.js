/*import {searchAll} from "./get.js";
document.querySelector("#charSearch").addEventListener("change",(e)=>{
    searchAll(e.target.value)
})*/


let fotoCanal = async ()=>{
    let peticion = await fetch(`storage/canal.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector(".nav-right");
    seleccion.insertAdjacentHTML  ("afterbegin",/*html*/`
   

        <img src="images/upload.png">
        <img src="images/more.png">
        <img src="images/notification.png">
        <img src=${res.avatar[1].url} class="user-icon">

        `)};
fotoCanal()

let fondoCanal = async ()=>{
    let peticion = await fetch(`storage/canal.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector(".container");
    seleccion.insertAdjacentHTML  ("afterbegin",/*html*/`
    <div class="banner">
        <img src=${res.banner.desktop[0].url} alt="">
    </div>
        `)};
fondoCanal()


let fondoVideo = async ()=>{
    let peticion = await fetch(`storage/channelSearch.json`);
    let foto= await fetch(`storage/canal.json`);
    let fotoC = await foto.json();
    let res = await peticion.json();
    let seleccion = document.querySelector(".list-container");
    seleccion.insertAdjacentHTML  ("beforeend",/*html*/`
    ${res.videos.map((value)=>/*html*/`
    <div class="vid-list">
    <a href="videos.html"><img src=${value.thumbnails[3].url}
        class="thumbnail"></a> 
        <div class="flex-div">
            <img src=${fotoC.avatar[1].url}>
            <div class="vid-info">
                <a href="videos.html">${value.title}</a>
                <p>CreativeCode</p>
                <p>${value.number_of_views}&bull; ${value.published_time}</p>
            </div>
        </div>
    </div>` ).join("")}
        `)};
       


var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}


fondoVideo();
