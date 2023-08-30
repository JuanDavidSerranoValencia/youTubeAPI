/*import {searchAll} from "./get.js";
document.querySelector("#charSearch").addEventListener("change",(e)=>{
    searchAll(e.target.value)
})*/

let fondoCanal = async ()=>{
    let peticion = await fetch(`/storage/canal.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector(".container");
    seleccion.insertAdjacentHTML  ("beforeend"/*html*/`
    ${res.banner.map((values)=>/*html*/`
    <div class="banner">
        <img src=${values.desktop[0].url} alt="">
    </div>`)}
   
    
        `)};


let fondoVideo = async ()=>{
    let peticion = await fetch(`/storage/channelSearch.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector(".list-container");
    seleccion.insertAdjacentHTML  ("beforeend"/*html*/`
    ${res.videos.map((value)=>/*html*/`
    <div class="vid-list">
        <a href="videos.html"><img src=${value.thumbnails.url} class="thumbnail"></a> 
        <div class="flex-div">
            <img src="images/Jack.png">
            <div class="vid-info">
                <a href="videos.html">Best channel to learn coding that help you to be a with 
                developer</a>
                <p>Easy Tutorials</p>
                <p>15k Views &bull; 2 days</p>
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
