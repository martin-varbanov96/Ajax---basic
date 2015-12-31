$(document).ready(function(){
    var start = Date.now();    
    var now;    
    var startCookie = $.cookie("start");
    if($.cookie("start") == undefined){
        $.cookie("start", Date.now());
    }
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
    $("#reset").click(function(){
        $.cookie("start", Date.now());
        startCookie = $.cookie("start");
    });
});