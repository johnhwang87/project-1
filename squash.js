$(document).ready(function(){

setInterval(function() {
    $('#canvas').append("<div class='bug'></div>")
}, 2000);



function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

setInterval(function (){
    function moveRandom(obj) {
    // get container position and size

    var keyboardPos = $('#keyboard').offset();
    var keyboardHeight = $('#keyboard').height();
    var keyboardWidth = $('#keyboard').width();

    // set maximum position
    maxY = keyboardPos.top + keyboardHeight;
    maxX = keyboardPos.left + keyboardWidth;

    // set minimum position
    minY = keyboardPos.top;
    minX = keyboardPos.left;

    // set new position
    newY = randomFromTo(minY, maxY);
    newX = randomFromTo(minX, maxX);

    obj.animate({
        top: newY,
        left: newX
        }, 3000, function() {
  moveRandom(obj);
    });
}

$('.bug').each(function() {
moveRandom($(this));
});

}, 1000);

});







// $(document).keydown(function(e) {
//     if(e.keyCode === 81){
//     $("#q").css("color", "red")
//     }
// });
// $(document).keyup(function(e) {
//     if(e.keyCode === 81){
//     $("#q").css("color", "white")
//     }
// });

// below code trying to make a loop for each charCode, and then CSS it to change key up and key down



// WHAT THE f get this damn loop to work
// function keyInput () {
//     for(i=65; i<91; i++) {
//         var e = String.fromCharCode(i).toLowerCase()
//         $(document).keydown(function(e) {
//         if(e.keyCode === (i)) {
//         $("#"+e).css("color", "red")
//             }
//         });
//     }

// keyInput();
// }


// });
