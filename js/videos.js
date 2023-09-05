let localID = localStorage.getItem('Id')
let urlDetallesVideo= `https://youtube138.p.rapidapi.com/video/details/?id=${localID}&hl=en&gl=US`;
let urlDetallesCanal = 'https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
let urlVideos = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '99a73f6972msh1c2028ce74233abp1ee836jsn226cae22b5f0',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};
let imgNav = async ()=>{
    let peticion = await fetch(urlDetallesCanal,options);
    let res = await peticion.json();
    let seleccion = document.querySelector(".nav-right");
    seleccion.insertAdjacentHTML  ("afterbegin",/*html*/`

        <img src="images/upload.png">
        <img src="images/more.png">
        <img src="images/notification.png">
        <img src=${res.avatar[1].url} class="user-icon">

        `)};

imgNav();

let barraLateral = async() => {
    let peticion = await fetch (urlVideos,options)
    let foto= await fetch(urlDetallesCanal,options); 
    let res = await peticion.json()
    let fotoC = await foto.json();
    let seleccion = document.querySelector('.right-sidebar')
    seleccion.insertAdjacentHTML('beforeend', /*html*/`
    ${res.videos.map((values)=>/*html*/`
    <div class="side-video-list" link_video=${values.video_id}>
        <a href="videos.html" class="small-thumbnail"><img src=${values.thumbnails[3].url}></a>
        <div class="vid-info">
            <a href="videos.html">${values.title}</a>
            <p>${fotoC.title}</p>
            <p>${values.number_of_views}&bull; ${values.published_time}</p>
        </div>
    </div>`).join(" ")}
    `)
const info = document.querySelectorAll(".side-video-list")
info.forEach(video =>{
    video.addEventListener('click', () =>{
        let videoID = video.getAttribute("link_video")
        localStorage.setItem('Id', videoID)
        window.location.href = 'videos.html';
    })
})

};
barraLateral();


let reproductorVideo = async()=>{
    let peticion = await fetch (urlDetallesVideo,options) 
    let res = await peticion.json()
    let seleccion = document.querySelector('.play-video')
    seleccion.insertAdjacentHTML('beforeend', /*html*/`
            <div class="contenedor-video">
                <iframe class="videoYoutube" src="https://www.youtube.com/embed/${localID}?si=x8sTL8khZPBt-OGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="tags">
                    <a href="">${res.category}</a>
                   
                </div>
            <h3>${res.title}</h3>
            <div class="play-video-info">
                <p>${res.stats.views} &bull;${res.publishedDate}</p>
                <div>
                    <a href=""><img src="images/like.png">${res.stats.likes}</a>
                    <a href=""><img src="images/dislike.png">125</a>
                    <a href=""><img src="images/share.png">125</a>
                    <a href=""><img src="images/save.png">125</a>
                </div>
            </div>
            <hr>
            <div class="publisher">
           
                <img src=${res.author.avatar[2].url}>
                <div>
                    <p>${res.author.title}</p>
                    <span>${res.author.stats.subscribersText}</span>
                </div>
                <button type="button">Subscribirse</button>

            </div>
            <div class="vid-description">
                <p>Channel that makes learning easy</p>
                <p>Subscribe Easy Tutorials to watch more tuorials on web developer</p>
                <hr>
                <h4>134 Comments</h4>


                <div class="add-comment">
                    <img src="${res.author.avatar[2].url}">
                    <input type="text" placeholder="Write Commets...">
                </div>

             

            `)};

reproductorVideo();