/*import {searchAll} from "./get.js";
document.querySelector("#charSearch").addEventListener("change",(e)=>{
    searchAll(e.target.value)
})*/

let urlDetallesCanal = 'https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
let urlVideos = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '99a73f6972msh1c2028ce74233abp1ee836jsn226cae22b5f0',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

let fotoCanal = async ()=>{
    let peticion = await fetch(urlDetallesCanal ,options);
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
    let peticion = await fetch(urlDetallesCanal ,options);
    let res = await peticion.json();
    let seleccion = document.querySelector(".container");
    seleccion.insertAdjacentHTML  ("afterbegin",/*html*/`
    <div class="banner">
        <img src=${res.banner.desktop[0].url} alt="sss">
    </div>
        `)};
fondoCanal()


let fondoVideo = async ()=>{
    let peticion = await fetch(urlVideos,options);
    let foto= await fetch(urlDetallesCanal,options);
    let fotoC = await foto.json();
    let res = await peticion.json();
    let seleccion = document.querySelector(".list-container");
    seleccion.insertAdjacentHTML  ("beforeend",/*html*/`
    ${res.videos.map((value)=>/*html*/`
    <div class="vid-list" link_video=${value.video_id}>
        <a href="videos.html"><img src=${value.thumbnails[3].url} class="thumbnail"></a> 
        <div class="flex-div">
            <img src=${fotoC.avatar[1].url}>
            <div class="vid-info">
                <a href="videos.html">${value.title}</a>
                <p>${fotoC.title}</p>
                <p>${value.number_of_views}&bull; ${value.published_time}</p>
            </div>
        </div>
    </div> `).join(" ")}
        `)
    
const info = document.querySelectorAll(".vid-list")
info.forEach(video =>{
    video.addEventListener('click', () =>{
        let videoID = video.getAttribute("link_video")
        localStorage.setItem('Id', videoID)
        window.location.href = 'videos.html';
    })
})
    
    };
       
fondoVideo();



var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}



