            $(document).ready(function () {
                $("#clothes").click(function () {
                    $("#content_box").load("./p1_clothes.html");
                });
                $("#shoes").click(function () {
                    $("#content_box").load("./p2_shoes.html");
                });
                $("#pants").click(function () {
                    $("#content_box").load("./p3_pants.html");
                });
                $("#dress").click(function () {
                    $("#content_box").load("./p4_dress.html");
                });
                $("#all").click(function () {
                    $("#content_box").load("p5_all-products.html");
                });
                $(".icon").click(function () {
                    $(".icon").removeClass("active_category");
                    $(this).addClass("active_category");
                });

                var slider = $(".banner_img");
                slider.hide();
                var min = 0;
                var max = slider.length - 1;
                var curr = 0;

                console.log(slider);
                slider.eq(curr).show();
                
                $("#slide-left").click(()=>{
                    slider.eq(curr).hide();
                    curr = (curr == min)?max: curr - 1;
                    slider.eq(curr).show();
                })
                $("#slide-right").click(()=>{
                    slider.eq(curr).hide();
                    curr = (curr == max)?min: curr + 1;
                    slider.eq(curr).show();
                })
                
            });