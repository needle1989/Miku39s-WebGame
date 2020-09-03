let starttime = 0;
let valTime = 0;
let minutes = 3;
let seconds = 0;
let dificultCreateTime = [700,1000];
let dificultSpeed = 40;
let songNum = 1;

$(function() {
	var setSound = new Howl({
		  src: ['sounds/perc-808.wav']
		});
    $('.setting-wrap').on('click', function() {
		setSound.play();
        $('.setting-nav').css('visibility', 'visible');
        $('.start').hide();
    });
    $('.dificult').on('click', function() {
		setSound.play();
        $(this).addClass('select');
        $(this).siblings('.dificult').removeClass('select');
		songNum = parseInt($(this).attr('song'));
        dificultSpeed = parseInt($(this).attr('speed'));
        dificultCreateTime = [];
        dificultCreateTime.push(parseInt($(this).attr('min-create')));
        dificultCreateTime.push(parseInt($(this).attr('max-create')));
    });
    $('#save').on('click', function() {
		setSound.play();
        new Setting().change();
    });

});