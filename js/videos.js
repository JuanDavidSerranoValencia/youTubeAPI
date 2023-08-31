let imgNav = async ()=>{
    let peticion = await fetch(`storage/canal.json`);
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
    let peticion = await fetch ('storage/channelSearch.json') 
    let res = await peticion.json()
    let foto= await fetch(`storage/canal.json`);
    let fotoC = await foto.json();
    let seleccion = document.querySelector('.right-sidebar')
    seleccion.insertAdjacentHTML('beforeend', /*html*/`
    ${res.videos.map((values)=>/*html*/`
    <div class="side-video-list">
    <a href="" class="small-thumbnail"><img src=${values.thumbnails[2].url}></a>
    <div class="vid-info">
        <a href="">${values.title}</a>
        <p>${fotoC.title}</p>
        <p>${values.number_of_views}&bull; ${values.published_time}</p>
    </div>
    </div>`)}
    `)}
barraLateral();