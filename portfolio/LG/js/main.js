window.onload = function () {
    
    sliderPagingNav();
    
    var top_container = document.querySelector('.top_left');
    var slider_container = top_container.querySelector('.main_swiper');
    var top_container_width = ''
    var current_btn = 1

    window.onresize = function() {

        change_position(current_btn)
        
    }
    function sliderPagingNav() {
        var btns = document.querySelectorAll('.slider_paging_btn');
        for(var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click",moveToPage);


            function moveToPage(e) {
                move_to = 0
                for(var i = 0; i < btns.length;i++) {
                    if (btns[i].classList.contains("active")){
                        btns[i].classList.remove("active");
                    } else if(btns[i] == e.target) {
                        btns[i].classList.add("active");
                        move_to = i+1
                    }
                }
                
                current_btn = move_to
                
                change_position(current_btn)
    
            }   
        }

    }

    function change_position(current_btn) {
        top_container_width = window.getComputedStyle(top_container).width;
        distance = top_container_width.replace(/[^0-9]/g, "");

        if(current_btn == 1){
            slider_container.style = "transform: translate3d(0px, 0px, 0px); transition-duration: 0.3s";
        }else if(current_btn == 2){
            slider_container.style = "transform: translate3d("+ -(distance)+"px, 0px, 0px); transition-duration: 0.3s";

        } else {
            slider_container.style = "transform: translate3d("+ -(distance*2)+"px, 0px, 0px); transition-duration: 0.3s";

        }

    }
}
