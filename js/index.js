$(function() {
    let tap = null;
    let createTime = null;
    let start = null;
    let Time = null;
    let startTime = null;
	var jojo = new Howl({
	  src: ['sounds/jojo.mp3']
	});
	var miku = new Howl({
		src:['sounds/miku.mp3']
	});
	var ow = new Howl({
		src:['sounds/ow.mp3']
	});
	var miku2 = new Howl({
		src:['sounds/miku2.mp3']
	});
	var sound = new Howl({
	  src: ['sounds/bubbles.mp3']
	});
	var cd = new Howl({
		src:['sounds/perc-laser.wav']
	});
	


    /* 监听开始按钮 */
    $('.start').on('click', function() {
        $(this).stop().animate({
            opacity: 0
        }, 600, 'linear', function() {
            $('.setting-wrap').hide();
            $('.start').hide();
			sound.play();
            startGame();
			
			
        });
		
        $('.score').text('0');
        new Setting().change();
    });

    $('.stop-game').on('click', function() {
        endGame();
		sound.play();
		jojo.stop();
		miku.stop();
		miku2.stop();
		ow.stop();
    });

    /* 监听按键 */
    $(document).on('keydown', function(e) {
        if (tap) {
            screenCheck(e.keyCode);
			sound.play();
        }
    });

    function startGame() {
        $('.countdown').show();
        $('.countdown').text(starttime);
		cd.play();
        startTime = setInterval(function() {
            starttime--;
			cd.play();
            $('.countdown').text(starttime);
            if (starttime == 0) {
                $('.countdown').hide();
				if(songNum == 1){
					jojo.play();
				}
				else if(songNum == 2){
					miku.play();
				}
				else if(songNum == 3){
					ow.play();
				}
				else if(songNum == 0){
					miku2.play();
				}
                $('.stop-game').show();
                clearInterval(startTime);
            }
        }, 1000);
		

        showTime();
        start = setTimeout(function() {
            createTime = setInterval(function() {
                tap = new Tap(randomNum(0,5));
            }, randomNum(dificultCreateTime[0], dificultCreateTime[1]));
            Time = setInterval(function() {
                time++;
                if (time == valTime) {
                    endGame();
                }
                showTime();
            }, 1000);
        }, 3000);
    };

    function screenCheck(keyCode) {
        if (keyCode == 49) {
            tap.tapClean($('#row-one'));
            screenAnimate($('#screen-one .screen-outline'));
        }else if (keyCode == 50) {
            tap.tapClean($('#row-two'));
            screenAnimate($('#screen-two .screen-outline'));
        }else if (keyCode == 51) {
            tap.tapClean($('#row-three'));
            screenAnimate($('#screen-three .screen-outline'));
        }else if (keyCode == 52) {
            tap.tapClean($('#row-four'));
            screenAnimate($('#screen-four .screen-outline'));
        }
    }

    function screenAnimate(obj) {
        obj.animate({
            width: '65px',
            height: '65px',
            top: '-21%',
            left: '-21%'
        }, 1, 'linear', function() {
            obj.animate({
                width: '60px',
                height: '60px',
                top: '-16%',
                left: '-16%'
            }, 1, 'linear');
            obj.stop();
        });
    }

    function endGame() {
        $('.stop-game').animate({
            opacity: 0
        }, 600, 'linear', function() {
            $('.stop-game').hide();
            $('.stop-game').css('opacity', '1');
        });
        clearInterval(createTime);
        clearTimeout(start);
        clearInterval(Time);
        $('.start').css('opacity', '1');
        roadCheck();
    }
    function roadCheck() {
        if ($('.row').children().length == 0) {
            $('.start').delay('500').show(0);
            $('.setting-wrap').delay('500').show(0);
            $('#endTime-minute').text('0');
            $('#endTime-second').text('00');
            return;
        }else {
            let endtime = setInterval(function() {
                roadCheck();
                clearInterval(endtime);
            }, 500);
        }
    }

    function showTime() {
        let endTime = valTime - time;
        let endTime_minute = Math.floor(endTime/60);
        let endTime_second = endTime - (60*endTime_minute);
        endTime_second = endTime_second<10 ? '0' + endTime_second : endTime_second;
        $('#endTime-minute').text(endTime_minute);
        $('#endTime-second').text(endTime_second);
    }

    function randomNum (max, min) {
        let num = Math.floor(Math.random() * (max - min + 1) + min);
        return num;
    }
});