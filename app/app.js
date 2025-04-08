import {homePage, aboutPage, contactPage, productsPage} from "./model.js"

function loadPageContent (pageName) {
    let pageContent = pageName + "Page";
    $("#app").html(eval(pageContent));
}

function initApp() {    
    loadPageContent("home") 

    $("nav a").on("click", (e) => {
    e.preventDefault();
    let btnID = e.currentTarget.id;

    loadPageContent(btnID);
    });
}


$(document).ready(() => {
    initApp();
});