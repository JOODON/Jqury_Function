$(function (){
    function ColorChange(title,name,color){
        // $("h1").css("color","red");
        $(title).css(name,color);
    }
    function CssProperty(title,name,value){
    // $("#typo .inner").css("border-bottom","5px solid red");
        $(title).css(name,value);
    }
    function MouseOnOff(title,onName,onEvent,offName,offEvent){
    // $("#typo").on('mouseover',function (){
    //     $(this).css("background-color","green");
    // }).on('mouseout',function (){
    //     $(this).css("background-color","blue");
    // });
    // }
    $(title).on('mouseover',function (){
        $(this).css(onName,onEvent);
    }).on('mouseout',function (){
        $(this).css(offName,offEvent);
    });
    }

    function Clickanimation(title,prop,speed,easing,backprop,backspeed){
    $(title).click(function (){
        $(this).animate(prop,speed,easing,
            function (){
                $(this).animate(backprop,backspeed);
            })
    })
    }


    ColorChange("h1","color","red");

    CssProperty("#typo .inner","text-decoration","underline");
    CssProperty("#typo .inner","border-bottom","5px solid red");
    // CssProperty("#typo .inner","transform","rotate(45deg)");
    CssProperty("#typo .inner","opacity","0.5");

    MouseOnOff("#typo .inner","background","#e0b3b3","background","#b3e0dc");

    Clickanimation("#typo .inner",{opacity:0,fontSize:"0px",},3000,"easeInOutElastic"
    ,{opacity:0.5,fontSize:"22px"},500);

});