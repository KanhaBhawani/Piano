// alert("check if keys are pressed or not");
isPressed_192 = false; // `
isPressed_81 = false; // q
isPressed_87 = false; // w
isPressed_69 = false; // e
isPressed_82 = false; // r
isPressed_84 = false; // t
isPressed_89 = false; // y
isPressed_85 = false; // u
isPressed_73 = false; // i
isPressed_79 = false; // o
isPressed_80 = false; // p
isPressed_219 = false; // [
isPressed_221 = false; // ]
isPressed_220 = false; // \
isPressed_13 = false; // enter
isPressed_49 = false; // 1
isPressed_50 = false; // 2
isPressed_51 = false; // 3
isPressed_52 = false; // 4
isPressed_53 = false; // 5
isPressed_54 = false; // 6
isPressed_55 = false; // 7
isPressed_56 = false; // 8
isPressed_57 = false; // 9
isPressed_48 = false; // 0
isPressed_189 = false; // -
isPressed_187 = false; // =
isPressed_8 = false; // backspace



$(document).keydown(function(event){
    // console.log(event.key);
    var x = event.charCode || event.keyCode;
    // console.log(x);
    startPlay(x);
});

$(document).keyup(function(event){
    var x = event.charCode || event.keyCode;
    stopPlay(x);
});

function startPlay(Key){
    $("." + Key).addClass("button-active");
}

function stopPlay(Key){
    // console.log(Key);
    $("." + Key).removeClass("button-active");
}