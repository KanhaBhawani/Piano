// alert("jkg");
isPressed_Tab = false;
isPressed_q = false;
isPressed_w = false;
isPressed_e = false;
isPressed_r = false;
isPressed_t = false;
isPressed_y = false;
isPressed_u = false;
isPressed_i = false;
isPressed_o = false;
isPressed_p = false;
// isPressed_[ = false;
isPressed_Tab = false;
isPressed_Tab = false;
isPressed_Tab = false;
isPressed_Tab = false;
isPressed_Tab = false;
isPressed_Tab = false;
isPressed_Tab = false;
isPressed_Tab = false;
isPressed_Tab = false;


$(document).keydown(function(event){
    var x = event.charCode || event.keyCode;
    startPlay(x);
});

$(document).keyup(function(event){
    var x = event.charCode || event.keyCode;
    stopPlay(x);
});

function startPlay(Key){
    console.log(Key);
}

function stopPlay(Key){
    console.log(Key);
}