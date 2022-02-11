$("#menu").click(()=>{
    $("li").slideToggle();
    $('#menu').slideUp().slideDown().animate({
        width:80,
        padding:15
    })
})