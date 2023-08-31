let localID = localStorage.getItem('Id')


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


let reproductorVideo = async()=>{

    
    let seleccion = document.querySelector('.play-video')
    seleccion.insertAdjacentHTML('beforeend', /*html*/`
    
        <iframe  width="1200" height="700" src="https://www.youtube.com/embed/${localID}?si=x8sTL8khZPBt-OGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div class="tags">
                    <a href="">#Coding</a>
                    <a href="">#Html</a>
                    <a href="">#Css</a>
                    <a href="">#Java Script</a>
                </div>
           
            <h3>Best YouTube Channel to learn web developers</h3>
            <div class="play-video-info">
                <p>1225 views &bull; 2 days ago</p>
                <div>
                    <a href=""><img src="images/like.png">125</a>
                    <a href=""><img src="images/dislike.png">125</a>
                    <a href=""><img src="images/share.png">125</a>
                    <a href=""><img src="images/save.png">125</a>
                </div>
            </div>
            <hr>
            <div class="publisher">
                <img src="images/Jack.png">
                <div>
                    <p>Easy Tutorials</p>
                    <span>500k Subscribers</span>
                </div>
                <button type="button">Subscribirse</button>

            </div>
            <div class="vid-description">
                <p>Channel that makes learning easy</p>
                <p>Subscribe Easy Tutorials to watch more tuorials on web developer</p>
                <hr>
                <h4>134 Comments</h4>


                <div class="add-comment">
                    <img src="images/Jack.png">
                    <input type="text" placeholder="Write Commets...">
                </div>

                <div class="old-comment">
                    <img src="images/Jack.png" >
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ullam laborum sed rem eveniet consequuntur obcaecati, inventore ab molestias omnis necessitatibus odit molestiae magnam voluptatibus adipisci nihil excepturi nostrum architecto!</p>
                        <div class="acomment-action">
                            <img src="images/like.png">
                            <span>244</span>
                            <img src="images/dislike.png" alt="">
                            <span></span>
                            <span>REPLY</span>
                            <a href="">All replies</a>
                        </div>
                    </div>
                </div>
                <div class="old-comment">
                    <img src="images/Jack.png" >
                    <div>
                        <h3>Jack Nicholson <span>2 days ago</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ullam laborum sed rem eveniet consequuntur obcaecati, inventore ab molestias omnis necessitatibus odit molestiae magnam voluptatibus adipisci nihil excepturi nostrum architecto!</p>
                        <div class="acomment-action">
                            <img src="images/like.png">
                            <span>244</span>
                            <img src="images/dislike.png" alt="">
                            <span></span>
                            <span>REPLY</span>
                            <a href="">All replies</a>
                        </div>
                    </div>
                </div>
                
            </div>

            `)};

reproductorVideo();