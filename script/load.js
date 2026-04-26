$(document).ready(function(){
    $(function(){
        var path = window.location.pathname;
        var page = path.split("/").pop();

        $('#header').load("/header.html");
        $('#footer').load("/footer.html");

        if(page == "introduce.html" || page == "project.html"){
            $('#top_title').load("../top_title.html");
        }else{
            $('#top_title').load("../../top_title.html");
        }

        var $topBtn = $('.pj-top-btn');
        if($topBtn.length){
            var updateTopBtn = function(){
                var scrollTop = $(window).scrollTop();
                var winHeight = $(window).height();
                var baseGap = window.matchMedia('(max-width: 640px)').matches ? 16 : 32;

                if(scrollTop > 300){
                    $topBtn.addClass('is-visible');
                }else{
                    $topBtn.removeClass('is-visible');
                }

                var $footer = $('#footer');
                if($footer.length && $footer.offset()){
                    var footerTop = $footer.offset().top;
                    var viewportBottom = scrollTop + winHeight;
                    if(viewportBottom > footerTop){
                        $topBtn.css('bottom', (viewportBottom - footerTop + baseGap) + 'px');
                    }else{
                        $topBtn.css('bottom', baseGap + 'px');
                    }
                }
            };
            $(window).on('scroll resize', updateTopBtn);
            $topBtn.on('click', function(){
                $('html, body').animate({scrollTop: 0}, 400);
            });
        }

    });
});