$(document).ready(function(){

$('#canvas').hide();
$('#startscreen').click(function (){
    $($(this)).hide();
    $('#canvas').show('fast', function() {


 for(var i=0; i<81; i++) {
           $('#canvas').append("<div class='bug'></div>")
    }

var counter = 60;
var begin = setInterval(function(){
    startTime();
}, 1000);
function startTime() {
    if(counter ===0){
        clearInterval(begin);
        clearInterval(gameOver);
        clearInterval(gameOver1);

        $(function(){
            $('#alert').easyModal();
                $('#alert').trigger('openModal');
                    autoOpen: true;
                    overlayOpacity: 0.7;
                    $('h3').append('<p class="alert">You have squished a score of: </p>'+scoreboard);
        });
    }
    else {
        counter--;
    }
    document.getElementById('counter').innerHTML = "time:" +counter;
}
    });

var gameOver = setInterval(function() {
    $('#canvas').append("<div class='bug'></div>")
}, 400);

var gameOver1 = setInterval(function () {
    $('#canvas').append("<div class='bug2'></div>")
}, 5000);
});


// investigate why var scoreboard doesnt work
scoreboard = 0;
function startScore() {
    document.getElementById('scoreboard').innerHTML = "score:" +scoreboard;
}
var start = setInterval(function(){
    startScore();
    }, 100)





function randomFromTo(from, to){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

setInterval(function (){
    function moveRandom(obj) {


    var keyboardPos = $('#keyboard').offset();
    var keyboardHeight = $('#keyboard').height();
    var keyboardWidth = $('#keyboard').width();


    maxY = keyboardPos.top + keyboardHeight;
    maxX = keyboardPos.left + keyboardWidth;


    minY = keyboardPos.top;
    minX = keyboardPos.left;


    newY = randomFromTo(minY, maxY);
    newX = randomFromTo(minX, maxX);

    obj.animate({
        top: newY,
        left: newX
        }, 4000, function() {
  moveRandom(obj);

    });
}

$('.bug').each(function() {
    moveRandom($(this));
});
$('.bug2').each(function () {
    moveRandom($(this));
});

}, 100);


});

function keyInput1 () {
    $(document).keydown(function(h) {
        if (h.keyCode > 64 && h.keyCode < 91) {
            var e = String.fromCharCode(h.keyCode).toLowerCase()
            $("#"+e).css("color", "red")
        };

    });
    $(document).keydown(function(m) {
        if(m.keyCode == 186) {
         $("#semi").css("color", "red")
    }
    });
    $(document).keydown(function(n) {
        if(n.keyCode == 188) {
         $("#comma").css("color", "red")
    }
    });
    $(document).keydown(function(o) {
        if(o.keyCode == 190) {
         $("#period").css("color", "red")
    }
    });
    $(document).keydown(function(p) {
        if(p.keyCode == 191) {
         $("#forward").css("color", "red")
    }
    });

}
keyInput1();

// theres gotta be a more elegant way to add other keys...
function keyInput2 () {
    $(document).keyup(function(j) {
        if (j.keyCode > 64 && j.keyCode < 91) {
            var f = String.fromCharCode(j.keyCode).toLowerCase()
            $("#"+f).css("color", "gray")
        }
       function squash () {
            var x = $("#"+f).offset().left -10;
            var y = $("#"+f).offset().top -10;
            var width = $("#"+f).width() -20;
            var height = $("#"+f).height() -20;
            $('.bug').each(function(index, s){
                if(s.offsetLeft > x && s.offsetLeft < x+width){
                    if(s.offsetTop > y && s.offsetTop < y+height){

                        scoreboard +=10;
                        document.getElementById('scoreboard').innerHTML = "score:" +scoreboard;


                    $($(this)).remove();

                        $('body').append("<div class='kill' style='top: " + s.style.top + "; left: " + s.style.left + "'></div>");
                        $('body').append("<div class='plus' style='top: " + s.style.top + "; left: " + s.style.left + "'><p>+10</p></div>");
                        $('.plus').animate({'marginTop': "-=40px"});
                        $('.plus').fadeOut(500, function () {
                    });
                 }
             }
    });
            $('.bug2').each(function(index, s){
                if(s.offsetLeft > x && s.offsetLeft < x+width){
                    if(s.offsetTop > y && s.offsetTop < y+height){

                        scoreboard -=200;
                        document.getElementById('scoreboard').innerHTML = "score:" +scoreboard;


                    $($(this)).remove();
                    $('body').append("<div class='kill2' style='top: " + s.style.top + "; left: " + s.style.left + "'></div>");
                    $('body').append("<div class='minus' style='top: " + s.style.top + "; left: " + s.style.left + "'><p>-200</p></div>");
                    $('.minus').animate({'marginTop': "-=40px"});
                    $('.minus').fadeOut(3000, function () {
                    });
             }
         }
    });
}

squash();

    });
}
// do i gotta add squash function to each...?
// try adding new variables under line 150 and
// then add squash function
// maybe move these functions below up under the other keys
// maybe add all the numbers of the keys in the if statement,
// and set variables as ; , . /
    $(document).keyup(function() {
        if(event.keyCode == 186) {
         $("#semi").css("color", "gray")
    }
    });
    $(document).keyup(function() {
        if(event.keyCode == 188) {
         $("#comma").css("color", "gray")
    }
    });
    $(document).keyup(function() {
        if(event.keyCode == 190) {
         $("#period").css("color", "gray")
    }
    });
    $(document).keyup(function() {
        if(event.keyCode == 191) {
         $("#forward").css("color", "gray")
    }
    });

keyInput2();


$(document).keydown(function() {
    if (event.keyCode === 16){
        $('.kill, .kill2').fadeOut(5000, function (){
        });
     }
});

setInterval(function() {
    $('#shiftkey').fadeOut(500, function() {
        var $this = $(this);
        $this.text($this.text() == '(bloodwiper)' ? 'Shift' : '(bloodwiper)');
        $this.toggleClass();
        $this.fadeIn(500);
    });
}, 2000);


