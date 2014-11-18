(function ($, window, document) {
    var pos = 0;
    
    for(var i=0; i < $(".slides .slide").length; i++) {
        var val = 'li' + i;
        $(".slider-body").append("<input type='radio' name='li' class=" + val + " id=" + i + ">");
        $("." + val).click(function() { 
                                        document.location.href = "#" + this.className;
                                        pos = this.id;
                                        console.log(pos);
                                        });    
    };
    
    $(".slider").click(function() {
                                    pos = pos < $(".slides .slide").length - 1 ? ++pos : 0;
                                    document.location.href = "#li" + pos;
                                    $(".li" + pos).attr("checked", true);
                                    });
})(jQuery, window, document);
