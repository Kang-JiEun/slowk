$(function(){
    /*비주얼 슬라이드*/
    if($('.cont01-visual-slider .swiper-container').length){
        var visualSwiper01 = new Swiper('.cont01-visual-slider .swiper-container', {
            init: false,
            loop:true,
            autoplay:{delay:8000, disableOnInteraction:false},
            speed:1000,
            spaceBetween:0,
            navigation: {
                nextEl:'.cont01-visual-swiper-button-next',
                prevEl:'.cont01-visual-swiper-button-prev',
            },
            pagination:{
                el:'.cont01-visual-swiper-pagination',
                type:'bullets',
                renderBullet:function(index,className){
                    if((index+1)<10) var idx='0'+(index+1);
                    else var idx=(index+1);

                    return '<span class="'+className+'"><b>'+idx+'</b></span>';
                }
            },
            on:{
                init:function(){
                    var $active=$(this.slides).eq(this.activeIndex);
                    var src=$active.find('img').attr('src')||'';
                    $('#visual').toggleClass('bg-alt',/scrim\.png|sajab\.png/i.test(src));
                },
                slideChange:function(){
                    var $active=$(this.slides).eq(this.activeIndex);
                    var src=$active.find('img').attr('src')||'';
                    $('#visual').toggleClass('bg-alt',/scrim\.png|sajab\.png/i.test(src));
                }
            }
        });

        //재생,정지 버튼
        $('.cont01-visual-slider').find('.cont01-visual-swiper-button-pause').click(function(){
            var isRun=visualSwiper01.autoplay.running;

            if(isRun) {
                visualSwiper01.autoplay.stop();
                $(this).switchClass('ri-pause-line', 'ri-play-fill');
            }
            else {
                visualSwiper01.autoplay.start();
                $(this).switchClass('ri-play-fill', 'ri-pause-line');
            }
        });
	}
	/* 비주얼 슬라이드 끝*/
    visualSwiper01.init();   

   //메인 탭메뉴 구현
   $(".tab_tit li").click(function () {
        var idx = $(this).index();
        $(".tab_tit li").removeClass("on");
        $(".tab_tit li").eq(idx).addClass("on");
        $(".tab_cont").hide();
        $(".tab_cont").eq(idx).show();
    })
    
});




