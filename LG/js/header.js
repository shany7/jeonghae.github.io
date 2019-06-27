window.onload = function () {

    $('.main_visual').bxSlider( {
        auto: false,
        pager:false,
    });
mainMenu();                         // 브라우저 크기에서 전체메뉴 오픈
showMenu();                         // 아이패드 이하 크기일 때 전체메뉴 오픈
openSubMenu();                         // 아이패드 이하 크기에서 하위메뉴 오픈
btnOption();                       // 상단 버튼메뉴
function mainMenu () {
    if ( window.innerWidth < 1280) { return;}     // 브라우저 크기에서만 작동.

    var nav_mainLi = document.querySelectorAll(".nav_main > li");
    for ( var i =0; i < nav_mainLi.length; i++) {
        nav_mainLi[i].addEventListener("mouseenter", listOn);
        nav_mainLi[i].addEventListener("mouseleave", listOff);

        function listOn (e) {
            e.target.classList.add("on");
            e.target.parentNode.classList.add("on");

        }
        function listOff (e){
            e.target.parentNode.classList.remove("on");
            e.target.classList.remove("on");
        }
    }
}

function showMenu () {
    var menuBtn = document.querySelector(".side_menuBtn");
    menuBtn.onclick = function () {
        var nav_mainEl = menuBtn.parentNode.querySelector(".nav_main");
        if ( menuBtn.className === "side_menuBtn on_click") { 
            menuBtn.classList.remove("on_click");
            nav_mainEl.classList.remove("on");
            return;
        }
        menuBtn.classList.add("on_click");
        nav_mainEl.classList.add("on");
    }


}

function openSubMenu () {
    var menuName = document.querySelectorAll(".nav_main span");
    for ( var i = 0; i < menuName.length; i++ ) {
        menuName[i].addEventListener("click", openMenu);
    }
    function openMenu (e) {
        e.preventDefault();
        var parentLi = e.target.parentNode.parentNode;
        
        if ( parentLi.className === "on" ) {
            parentLi.className = "";
            return;
        }
        for( var i = 0 ; i < menuName.length; i++) {
            menuName[i].parentNode.parentNode.className = "";
        }
        parentLi.classList.add("on");
    }
}

function btnOption () {
    var btnEl = document.querySelector(".nav_btn");
    var langEl = btnEl.querySelector(".lang");
    var langAEl = langEl.querySelectorAll(".lang > a");

    langEl.addEventListener("mouseover", openLang);
    langEl.addEventListener("mouseout", closeLang);
    langEl.addEventListener("click", changeLang);

    function openLang(e) {
        langEl.classList.add("on");
    }
    function closeLang(e) {
        langEl.classList.remove("on");
    }
   
}
};