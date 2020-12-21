function showhappy(){
    $("#happy_container").css("display","inherit");
    $("#happy_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#happy_container").removeClass("animated slideInLeft");
    },800);
}
function closehappy(){
    $("#happy_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#happy_container").removeClass("animated slideOutLeft");
        $("#happy_container").css("display","none");
    },800);
}
function showsad(){
    $("#sad_container").css("display","inherit");
    $("#sad_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#sad_container").removeClass("animated slideInRight");
    },800);
}
function closesad(){
    $("#sad_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#sad_container").removeClass("animated slideOutRight");
        $("#sad_container").css("display","none");
    },800);
}
function showmad(){
    $("#mad_container").css("display","inherit");
    $("#mad_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#mad_container").removeClass("animated slideInUp");
    },800);
}
function closemad(){
    $("#mad_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#mad_container").removeClass("animated slideOutDown");
        $("#mad_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#happy").removeClass("animated fadeIn");
      $("#mad").removeClass("animated fadeIn");
      $("#sad").removeClass("animated fadeIn");
    },1000);
},1500);
