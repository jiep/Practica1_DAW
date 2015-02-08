$(function () {

    var func = function () {

        var desp = menu.find('ul');
        var size = desp.height();

        desp.css('height', 0);

        menu.mouseenter(function () {
            desp.css('display', 'block');
            desp.stop(true, false).animate({
                height: size,
                opacity: 1
            }, 'normal');

        });

        menu.mouseleave(function () {
            desp.stop(true, false).animate({
                height: 0,
                opacity: 0
            }, 'normal', function () {
                desp.css("display", 'none');
            });
        });
    };

    for(var i = 1; i<=4; i++){
      var menu = $("#despl_menu" + i);
      func();
    }

});
