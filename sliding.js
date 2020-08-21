
var states = [-100, -100, -100,];

$('#but1').click(function() {
    states[0]=(states[0]==0)?-100:0;
    states[1]=-100;
    states[2]=-100;
    update();
});

$('#but2').click(function() {
    states[0]=-100;
    states[1]=(states[1]==100)?-100:0;
    states[2]=-100;
    update();
});

$('#but3').click(function() {
    states[0]=-100;
    states[1]=-100;
    states[2]=(states[2]==0)?100:0;
    update();
});


function update() {
    $('#div1').animate({
        'marginLeft' : states[0] + "%"
    });
    $('#div2').animate({
        'marginLeft' : states[1] + "%"
    });
    $('#div3').animate({
        'marginLeft' : states[2] + "%"
    });
}
