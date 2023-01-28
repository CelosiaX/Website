            var count = 0;

            $(document).ready(function(){

            var qtyDecs = document.querySelectorAll(".qty-dec");
            var qtyIncs = document.querySelectorAll(".qty-inc");

            console.log(qtyDecs);
            console.log(qtyIncs);
            qtyDecs.forEach((qtyDec) => {
            qtyDec.addEventListener("click",function(e){
                if(e.target.nextElementSibling.value > 0){
                e.target.nextElementSibling.value--;
                }
            })
            })
            qtyIncs.forEach((qtyDec) => {
            qtyDec.addEventListener("click",function(e){
                e.target.previousElementSibling.value++;
            })
            })
        });
        function openNav() {
          document.getElementById("navi-bar").style.width = "160px";
        }
        
        function closeNav() {
          document.getElementById("navi-bar").style.width = "0";
        }