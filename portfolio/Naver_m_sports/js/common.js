window.onload = function () {
    
    // header 검색창 오픈
    search();
    function search () {
        var noneSch = document.querySelectorAll(".notsch");
        var headerEl = document.querySelector("header");
        var inputSch = headerEl.querySelector("#search");
        
        inputSch.addEventListener("click", searchBox);

        function searchBox () { // search_box,nav_top,header: on ; .notsch: off
            var schBox = this.parentNode.nextElementSibling;
            var closeSch = schBox.querySelector(".bottom_box .close")
            if ( this.parentNode.classList.contains("on")) return;
            headerEl.classList.add("on");
            this.parentNode.classList.add("on");
            
            schBox.classList.add("on");

            for ( var i = 0; i < noneSch.length; i++) {
                noneSch[i].classList.remove("on");
            }
            return closeSchBox(closeSch, this.parentNode, schBox);
        }

        function closeSchBox (closeBtn, closeNode1, closeNode2) {
            closeBtn.onclick = function (e) {
                e.preventDefault();
                closeNode1.classList.remove("on");
                closeNode2.classList.remove("on");
                headerEl.classList.remove("on");

                for ( var i = 0; i < noneSch.length; i++) {
                    noneSch[i].classList.add("on");
                }

            }
        }
    }
};