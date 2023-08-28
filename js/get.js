//const url = 'https://youtube138.p.rapidapi.com/channel/search/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&q=john%20cena&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '99a73f6972msh1c2028ce74233abp1ee836jsn226cae22b5f0',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

(async (p1)=>{
   
    let peticion = await fetch(`https://youtube138.p.rapidapi.com/channel/search/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&q=${p1}&hl=en&gl=US`,options);
    let res = await peticion.json();localStorage.
    seleccion.insertAdjacentHTML("beforeend",/*html*/`
    <div  class="d-flex flex-column flex-md-row align-items-center justify-content-between  ">
        <a href="" class="d-flex align-items-center link-body-emphasis text-decoration-none">
        <img src=${res.nav.img} width="140px" margin>
        </a>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a class="fs-5 py-2 link-body-emphasis text-decoration-none" href="#">${res.nav.txtLog}</a>
        </nav>
    </div>
    <hr>
    <div  id="section1" class="pricing-header pt-md-2 pb-md-5 mx-2  text-start"></div>
        `)
    }
)(path);