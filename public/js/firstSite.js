if(localStorage.getItem("time") == "night"){
    window.location.href = "firstSiteBlack.html";
}

const infoIzmena = document.getElementById("infoIzmena");
const threePalki = document.getElementById("threePalki");
const oknoVaezd = document.getElementById("oknoVaezd");
const outButOknoVaezdAPAll = document.querySelectorAll("#outButOknoVaezd a p");
const NoOknoVaezdBut = document.getElementById("NoOknoVaezdBut");
const greyOkno = document.getElementById("greyOkno");
const DayOrNight = document.getElementById("DayOrNight");
const circle = document.getElementById("circle");
const body = document.querySelector("body");
const header = document.querySelector("header");
const headerA = document.querySelector("header a");
const zag = document.getElementById("zag");
const zagH1 = document.querySelector("#zag h1");
const video = document.querySelector("#zag iframe");
const zagolovok = document.getElementById("zagolovok");
const articleTypePAll = document.querySelectorAll(".articleType p");
const articleTypeImgAll = document.querySelectorAll(".articleType img");
const headerAH1 = document.querySelector("header a h1");
const palkaAll = document.querySelectorAll(".palka");
const salka = document.getElementById("salka");
const salkaOkno2 = document.getElementById("salkaOkno2");
const footer = document.querySelector("footer");
localStorage.setItem("location", `${window.location.href}`);

function makeNight(){
    localStorage.setItem("time", "night");
    DayOrNight.style.border = "5px solid #6A5ACD";
    DayOrNight.style.backgroundColor = "#272727";//
    circle.style.backgroundColor = "#8D8D8D";
    circle.style.left = "72px";//
    body.style.backgroundColor = "#272727";
    header.style.backgroundColor ="#1A1A1A";
    headerAH1.style.color = "#6A5ACD";//
    zag.style.backgroundColor ="#1A1A1A";
    zagH1.style.color = "#6A5ACD";//
    video.style.border = "5px solid #6A5ACD";//
    zagolovok.style.color = "#6A5ACD";//
    for(let i = 0; i < articleTypePAll.length; ++i){
        articleTypePAll[i].style.color = "whitesmoke";
    }
    for(let i = 0; i < articleTypeImgAll.length; ++i){
        articleTypeImgAll[i].style.border = "5px solid #6A5ACD";//
    }
    textFooter.style.color = "#1A1A1A";//
    oknoVaezd.style.backgroundColor = "#1A1A1A";//
    for(let i = 0; i < outButOknoVaezdAPAll.length; ++i){
        outButOknoVaezdAPAll[i].style.color = "#6A5ACD";//
    }
    for(let i = 0; i < palkaAll.length; ++i){
        palkaAll[i].style.backgroundColor = "#6A5ACD";//
    }
    salka.style.color = "whitesmoke";
    footer.style.backgroundColor = "#6A5ACD";
    headerA.href = "homeBlack.html";
    salkaOkno2.href = "aboutBlack.html";
    localStorage.setItem("location", `firstSiteBlack.html`);
    document.querySelector("[href='test.html']").href = "testBlack.html";
}

function makeDay(){
    localStorage.setItem("time", "day");
    DayOrNight.style.border = "5px solid #05386b";
    DayOrNight.style.backgroundColor = "#42AAFF"
    circle.style.backgroundColor = "yellow";
    circle.style.left = "18px";
    body.style.backgroundColor = "#edf5e1";
    header.style.backgroundColor = "#5cdb95";
    headerAH1.style.color = "#05386b";
    zag.style.backgroundColor = "#5cdb95";
    zagH1.style.color = "#05386b";
    video.style.border = "5px solid #05386b";
    zagolovok.style.color = "#05386b";
    for(let i = 0; i < articleTypePAll.length; ++i){
        articleTypePAll[i].style.color = "black";
    }
    textFooter.style.color = "#edf5e1";
    oknoVaezd.style.backgroundColor = "#5cdb95";
    for(let i = 0; i < outButOknoVaezdAPAll.length; ++i){
        outButOknoVaezdAPAll[i].style.color = "#05386b";
    }
    for(let i = 0; i < palkaAll.length; ++i){
        palkaAll[i].style.backgroundColor = "#05386b";
    }
    salka.style.color = "black";
    footer.style.backgroundColor = "#05386b";
    headerA.href = "../home.html";
    salkaOkno2.href = "about.html";
    localStorage.setItem("location", `firstSite.html`);
    document.querySelector("[href='testBlack.html']").href = "test.html";
}

DayOrNight.addEventListener("click", ()=>{
    console.log(localStorage.getItem("time"));
    if(localStorage.getItem("time") == undefined || localStorage.getItem("time") == "day"){
        makeNight();
        console.log("Стала ночь");
    }
    else if(localStorage.getItem("time") == "night"){
        makeDay();
    }
});

threePalki.addEventListener("click", function (){
    console.log(document.getElementById("oknoVaezd").style.width);
    if(window.innerWidth <= 808){
        oknoVaezd.style.left = "0%";
    }
    else{
        oknoVaezd.style.left = "75%";
    }
    document.body.style.overflow = "hidden";
    greyOkno.style.right = "0%";
});

NoOknoVaezdBut.addEventListener("click", function(){
    document.body.style.overflow = "auto";
    oknoVaezd.style.left = "100%"
    greyOkno.style.right = "100%";
});

greyOkno.addEventListener("click", ()=>{
    oknoVaezd.style.left = "100%"
    greyOkno.style.right = "100%";
});