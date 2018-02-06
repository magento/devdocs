$(".left-navigation .active").parents("ul").slideDown(100).siblings(".toggle").removeClass("closed").addClass("open");
$(".left-navigation .active>ul").show().siblings(".toggle").removeClass("closed").addClass("open");


$(".left-navigation .toggle").click(function(e){
    var $this = $(this);
    if($this.hasClass("open")){
        $this.removeClass("open").addClass("closed");
        $this.siblings("ul").slideUp(200);
    }
    else{
        $this.removeClass("closed").addClass("open");
        $this.siblings("ul").slideDown(200);
    }
});

$(".left-navigation span").click(function(e){
    var $this = $(this);
    $this.prev(".toggle").click();
});
