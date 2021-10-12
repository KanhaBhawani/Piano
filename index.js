/* variables */
var piano = Synth.createInstrument('piano');
var keys_long = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
var keys_short = ['C#', 'D#', 'F#', 'G#', 'A#'];
var keyboard_size = 15;
var start_octave = 3;

change_notes(start_octave);

/* ------------------------------------------------- */
/* element selectors */

// EVENTS-->
// keyboard events
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

// mouse events
$('button').mousedown(function () {
    var Id = $(this).attr('id');
    $('#' + Id).addClass("button-active");
    getNoteOctave(Id);
});
$('button').mouseup(function () {
    var Id = $(this).attr('id');
    $('#' + Id).removeClass("button-active");
});

// changing the range-->
$("#note-range-selector").change(function () {
    var start_note = $(this).val();
    start_note = parseInt(note);
    start_octave = start_note;
    change_notes(start_note);
});


/* ------------------------------------------------- */
/* functions */

// getting notes and octaves
function getNoteOctave(Id) {
    var buttonNumber = Id.slice(1);
    var buttonSize = Id[0];
    if (buttonSize == 'l') {
        var note = keys_long[(buttonNumber - 1) % 7];
        var octave = Math.floor((buttonNumber - 1) / 7) + start_octave;
    }
    else {
        var note = keys_short[(buttonNumber - 1) % 5];
        var octave = Math.floor((buttonNumber - 1) / 5) + start_octave;
    }
    $("#played_key").text(note + octave);
    startPlay(note, octave);
}

// sound play / pause
function startPlay(note, octave) {
    piano.play(note, octave, 2);
}
function stopPlay(note) {
}

// changing range
function change_notes(start_note){
    for (let index = 1; index <= 15; index++) {
        var note = keys_long[(index - 1) % 7];
        var octave = Math.floor((index - 1) / 7) + start_note;
        $('#l' + index + " .key-word-down").text(note + octave);
    }
}
