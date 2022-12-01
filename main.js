$(".down").on("click" , function(){
    $(".answer").hide()
    $(this).parent().parent().find(".answer").css("display" ,"inline-block");
})
