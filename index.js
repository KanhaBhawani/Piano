var i = 3;
var keys = ['C','D','E','F','G','A','B'];

/* ------------------------------------------------- */

$(document).keydown(function (event) {
    var x = event.charCode || event.keyCode;
    $("." + x).addClass("button-active");
    var Id = $(("." + x)).attr('id');
    Id = Id.slice(1);
    var note = keys[(Id-1)%7];
    var octave = Math.floor((Id-1)/7) + i;
    console.log(note);
    console.log(octave);
    startPlay(note,octave);
});

$(document).keyup(function (event) {
    var x = event.charCode || event.keyCode;
    $("." + x).removeClass("button-active");

    // stopPlay(note,octave);
});

$('button').mousedown(function(){
    var Id = $(this).attr('id');
    $('#'+Id).addClass("button-active");
});

$('button').mouseup(function(){
    var Id = $(this).attr('id');
    $('#'+Id).removeClass("button-active");
});

/* ------------------------------------------------- */

function startPlay(note,octave) {
    var piano = Synth.createInstrument('piano');
    piano.play(note, octave, 2.5); 
}

function stopPlay(note) {
}
