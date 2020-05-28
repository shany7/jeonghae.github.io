window.onload = function () {
    var btnEl = document.querySelector(".nav_btn");
    $('.main_visual').bxSlider( {
        auto: false,
        pager:false,
    });
mainMenu();                         // 브라우저 크기에서 전체메뉴 오픈
showMenu();                         // 아이패드 이하 크기일 때 전체메뉴 오픈
openSubMenu();                      // 아이패드 이하 크기에서 하위메뉴 오픈
btnOption();                        // 상단 버튼메뉴
serchBox();                         // 검색창 열기
moveInhouse();                      // 자회사 이동

window.onresize = function () { closeOpenMenu();};

function closeOpenMenu() {
    var nav_main = document.querySelector('.nav_main');
    var side_btn = document.querySelector('.side_menuBtn');
    if(window.innerWidth > 1280 && nav_main.classList.contains('on')) {
        nav_main.classList.remove('on');
        side_btn.classList.remove('on_click');

        document.querySelector('.nav_main > li.on').classList.remove('on');
        
    }

}

function mainMenu () {
    
    var nav_mainLi = document.querySelectorAll(".nav_main > li");

    for ( var i =0; i < nav_mainLi.length; i++) {
        nav_mainLi[i].addEventListener("mouseenter", listOn);
        nav_mainLi[i].addEventListener("mouseleave", listOff);

        function listOn (e) {
            if(window.innerWidth > 1280) {
                e.target.classList.add("on");
                e.target.parentNode.classList.add("on");
            } else {
                e.target.style.backgroundColor = "#ac0c3f";
            }
        }
        function listOff (e){
            if (window.innerWidth > 1280) {
                e.target.parentNode.classList.remove("on");
                e.target.classList.remove("on");
            } else {
                e.target.style.backgroundColor = "#444547";
            }
            
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
    
    var langEl = btnEl.querySelector(".lang");
    var langAEl = langEl.querySelectorAll(".lang > a");

    langEl.addEventListener("mouseover", openLang);
    langEl.addEventListener("mouseout", closeLang);

    function openLang(e) {
        langEl.classList.add("on");
    }
    function closeLang(e) {
        langEl.classList.remove("on");
    }
   
}

function serchBox() {
    var serchBtn = btnEl.querySelectorAll("button.serch");
    var divSerch = btnEl.querySelector("div.serch");
    var inputSch = divSerch.querySelector("input");
    var closeBtn = divSerch.querySelector("button.close");

    closeBtn.addEventListener("click", serchOff)
    for ( var i = 0; i < serchBtn.length; i++) {
        serchBtn[i].onclick = function () {
            
            if ( this.parentNode.className === "nav_btn") {
                serchOn()
            }
            else {
                serch();
            }
        };
    }

    function serchOn() {
        if ( divSerch.classList.contains("on") ) {
            divSerch.classList.remove("on");
            return;
        }
        divSerch.classList.add("on");
    }
    function serchOff() {
            divSerch.classList.remove("on");
            inputSch.value ="";
    }
    function serch() {
        
        if ( inputSch.value == "") {
            alert("검색어를 입력해주세요");
        }
        else {
            // 검색
        }

    }

}

function moveInhouse() {
    var inhouseEl = document.querySelector(".inhouse");
    var inhouseList = inhouseEl.querySelector("ul");
    inhouseEl.addEventListener("mouseover", openList);
    inhouseEl.addEventListener("mouseout", closeList);

    function openList(e) {
        if ( e.target.tagName !== "A") return;
        inhouseList.classList.add("on");
    }

    function closeList(e) {
        if (e.relatedTarget.tagName === "A") return;
        inhouseList.classList.remove("on");
    }

}

};  // window.onload 끝

