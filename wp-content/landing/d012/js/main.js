
$(function() {

   




    var go_top = $('#go-top');
    go_top.hide();
    go_top.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });


    var h = $("body"),i = $(window);

    i.scroll(function () {
        var a = i.scrollTop();
        var j = $('#wrapper');
        var wrap_height = j.height();
        var footer = $('#footer');
        var foot_height = footer.height();
        var foot_diff = wrap_height - foot_height - $(window).height();
        var start = false;

        if (a > 50 && !start) {
            go_top.fadeIn('slow');
            start = true;
        }else{
            go_top.fadeOut(300);
            start = false;
        }

        if (a < foot_diff)
        {
            go_top.css({
                position:'fixed',
                bottom:13});
        }else{
            go_top.css({
                position:'absolute',
                bottom:13
            });
        }

    });

});
