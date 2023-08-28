import {searchAll} from "./get.js";
document.querySelector("#charSearch").addEventListener("change",(e)=>{
    searchAll(e.target.value)
})











var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}



