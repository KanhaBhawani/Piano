var start_octave = 3;
var piano = Synth.createInstrument('piano');
var keys_long = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
var keys_short = ['C#', 'D#', 'F#', 'G#', 'A#'];
var keyboard_size = 15;

for (let index = 1; index <= 15; index++) {
    var note = keys_long[(index - 1) % 7];
    var octave = Math.floor((index - 1) / 7) + start_octave;
    $('#l'+index+" .key-word-down").text(note+octave);
    
}
/* ------------------------------------------------- */

$(document).keydown(function (event) {
    var x = event.charCode || event.keyCode;
    $("." + x).addClass("button-active");
    var Id = $(("." + x)).attr('id');
    getNoteOctave(Id);
});

$(document).keyup(function (event) {
    var x = event.charCode || event.keyCode;
    $("." + x).removeClass("button-active");

    // stopPlay(note,octave);
});

$('button').mousedown(function () {
    var Id = $(this).attr('id');
    $('#' + Id).addClass("button-active");
    getNoteOctave(Id);
});

$('button').mouseup(function () {
    var Id = $(this).attr('id');
    $('#' + Id).removeClass("button-active");
});

/* ------------------------------------------------- */
function getNoteOctave(Id) {
    var buttonNumber = Id.slice(1);
    var buttonSize = Id[0];
    if (buttonSize == 'l') {
        var note = keys_long[(buttonNumber - 1) % 7];
        var octave = Math.floor((buttonNumber - 1) / 7) + start_octave;
    }
    else{
        var note = keys_short[(buttonNumber - 1) % 5];
        var octave = Math.floor((buttonNumber - 1) / 5) + start_octave;
    }
    $("#played_key").text(note+octave);
    startPlay(note, octave);
}

function startPlay(note, octave) {
    piano.play(note, octave, 2);
}

function stopPlay(note) {
}
