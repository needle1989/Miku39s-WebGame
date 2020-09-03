function Setting() {
    time = 0;
    score = 0;
}

Setting.prototype.change = function() {
    starttime = 3;
    // let val_minutes = $('#minutes').val();
    // let val_seconds = $('#seconds').val();
	let val_minutes = 3;
	let val_seconds = 0;
	// let songNum = parseInt($('.dificult').attr('song'));
    if (val_minutes != '' || val_seconds != '') {
        valTime = 0;
        // if (val_minutes != '') {
        //     valTime += parseInt($('#minutes').val()) * 60;
        // }
        // if (val_seconds != '') {
        //     valTime += parseInt($('#seconds').val());
        // }
		// if (val_minutes != '') {
		//     valTime += 3 * 60;
		// }
		// if (val_seconds != '') {
		//     valTime += 0;
		// }
		if(songNum == 0){
			val_minutes = 4;
			val_seconds = 0;
			valTime = 240;
		}
		else if(songNum == 1){
			val_minutes = 1;
			val_seconds = 40;
			valTime = 100;
		}
		else if(songNum == 2){
			val_minutes = 3;
			val_seconds = 45;
			valTime = 225;
		}
		else if(songNum == 3){
			val_minutes = 2;
			val_seconds = 35;
			valTime = 155;
		}
		
    }else {
        $('.error-msg').hide();
        $('.setting-nav').css('visibility', 'hidden');
        $('.start').show();
        valTime = 180;
        return;
    }
    if (valTime > 300 || valTime < 60) {
        $('.error-msg').css('display', 'block');
    }else {
        $('.error-msg').hide();
        $('.setting-nav').css('visibility', 'hidden');
        $('.start').show();
        return;
    }
}