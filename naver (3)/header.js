var navEl = document.querySelector(".nav");
var navliEls = document.querySelectorAll(".nav > li");

// 파이어폭스는 enter & leave 버블링,캡쳐링이 안됨 & 자식을 다 인식함, 크롬은 over, out
for ( var i = 0; i < navliEls.length; i++ ) {
    navliEls[i].addEventListener("mouseenter", enterWork);
    navliEls[i].addEventListener("mouseleave", leaveWork);
}

var openedMenu;


function enterWork() {
    var childMenu = this.querySelector(".sub");
    if(!childMenu) { return;}
    childMenu.className = "sub opened";
    openedMenu = childMenu;
}
function leaveWork() {
    if ( !openedMenu ) { return;}
    openedMenu.className = "sub";
}

// navEl.addEventListener("mouseover", overWork);
// navEl.addEventListener("mouseout", outWork);

// function overWork (e) {
//     if(e.target.tagName !== "IMG") {
//         return;
//     }
//     var childMenu = e.target.parentNode.parentNode.querySelector(".sub");
//     if(childMenu) {
//         childMenu.classList.add("opened");
//         openedMenu = childMenu;
//     }
// }
// function outWork (e) {
//     if(!openedMenu) { return;}          // undefined 경우 에외처리
//     var childMenu = openedMenu;
//     if (!closeCheck(e.relatedTarget)) {
//         childMenu.classList.remove("opened");
//     }
    
//     function closeCheck (movePoint) {
//         while( movePoint.tagName !== "HTML") {
//             if ( openedMenu === movePoint ) {
//                 return true;
//             }
//             movePoint = movePoint.parentNode;
//         }
//         return false;
//     }

// }

// click button
clickToggle("global");      //원하는 클래스이름
clickToggle("lang");
function clickToggle(대상) {
    var toggleEl = document.querySelector("." + 대상);
    var btn = toggleEl.querySelector(".btn");
    var subMenu = toggleEl.querySelector("ul");

    
    btn.addEventListener("click", (function (e) { 
            e.preventDefault();
            if ( subMenu.className === "") {
                subMenu.className = "opened";
            }
            else {
                subMenu.className = "";
            }
        }));
   

}

// clickMenus();
// function clickMenus() {
//     var globaImg = document.querySelector(".util > .global > a > img");
//     var langImg = document.querySelector(".util > .lang > a > img");

//     globaImg.addEventListener("click", listOn);
//     langImg.addEventListener("click", listOn);

//     function listOn(e) { 
//         var childMenu = e.target.parentNode.parentNode.querySelector("ul");
//         e.preventDefault();
//         if ( childMenu.className === "opened") {
//             childMenu.className = "";
//         }
//         else {
//             childMenu.className = "opened";
//         }
//     }
// }
