$(document).ready(function(){
    var start = Date.now();    
    var now;    
    $.cookie("start", Date.now());;
    var startCookie = $.cookie("start");
    setInterval(function(){
        now = Math.floor((Date.now() - startCookie)/1000);
        if(now < 60){
            $("#output").html(now + " seconds");
        }else if(now < 3600){
            $("#output").html(Math.floor(now/60) + " minutes");
        }else if(now < 86400){
            $("#output").html(Math.floor(now/1440) + " hours");
        }
    }, 3000);
});