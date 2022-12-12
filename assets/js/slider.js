jQuery(document).ready(function ($) {
    function ourTeamSliderControl() {
        initSlick();
        console.log("heheee");

        window.addEventListener("resize", () => {
            initSlick();
        });

        const query = matchMedia("screen and (orientation:portrait)");
        query.onchange = (e) => {
            // setUpSlider();
            initSlick();
        };

        // function setUpSlider() {
        //     if (window.innerWidth <= MOBILE_WIDTH) {
        //         initSlick();
        //     } else {
        //         unSlick();
        //     }
        // }

        function initSlick() {
            $(".responsive")
                .not(".slick-initialized")
                .slick({
                    dots: true,
                    infinite: false,
                    autoplay: true,
                    mobileFirst: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                    ],
                });
        }

        // function unSlick() {
        //     setTimeout(() => {
        //         $(".responsive.slick-initialized")?.slick("unslick");
        //     }, 100);
        // }
    }
});


function main() {
    ourTeamSliderControl();
}

main();