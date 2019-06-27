    window.onload = function () {
        var 재료 = document.querySelector("div");
        재료.style.border = "5px solid red";

        /* rwd 이미지 처리 */
        var vpWidth = window.innerWidth;
        var imgEl = document.querySelector("picture > img");
        var 타임이름;
        window.addEventListener("resize", 리사이즈할일);

        //디바운싱. 기다렸다가 마지막에만 호출.
        function 리사이즈할일() {
            clearTimeout(타임이름);
            타임이름 = setTimeout(checkSize, 150);
        }
         
        function checkSize () {
            vpWidth = window.innerWidth;
            var imgSize;
            if(vpWidth < 720) {
                imgEl.src = "http://placehold.it/720x720";
                
            } else if (vpWidth > 1024) {
                imgEl.src = "http://placehold.it/1024x400";
            } else {
                imgEl.src = "http://placehold.it/800x800";
            }
            
            console.log(vpWidth); 
        }

        var 타임이름 = setTimeout(하고싶은일 , 5000);   // 시간. ms 단위
        clearTimeout(타임이름);                 // 예약 취소
        function 하고싶은일() {
        console.log("1초 도달!");
        }
    }

