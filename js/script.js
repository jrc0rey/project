
// //Start Page

// $('#startBtn').on('click',function(e){ 
// 	$('#gif').show();
// 	$('#audio').prop('volume','.05');
// 	$('#audio').trigger('play');
// setTimeout(function(e){
// 	$('#gif').hide();
// 	},3000); 
// 	$('#gamePage').css('display','flex');
// 	$('#pageOne').css('display', 'none')
// });

function inputDisable(){
	$('#input').prop('disabled', true)
}

function inputEnable(){
	$('#input').prop('disabled', false)
}

//Global Variables

var firstTime = true;
var firstRadioMan = true;
var howardClue = true;
var tagruatoClue = true;

//Tagruato

function tagruato(){
	$('#overlays').css('display','flex')
	$('#tagruato').show();
	$('li:nth-child(1)').css('color','red').css('text-decoration','line-through');
	$('#tagruato').fadeOut(10000);
	setTimeout(function(){
		$('#overlays').css('display','none');
	},10000)
}

// Howard's Clue Part I

function clueOne(){
 var fade = function(){
	$('.picol_rdf').fadeIn(1000);
	$('.picol_rdf').fadeOut(2000);
	fade();
	}
	fade();
}
	$('.picol_rdf').on('click', function(e){
		$('#overlays').css('display','flex')
		$('#memo').show();
		$('ul').hide();
	})
	$('#memo').on('click',function(e){
		clueTwo();
		$('#overlays').css('display','none')
		$('.picol_rdf').remove();
	})

// Howard's Clue Part II

function clueTwo(){
	inputDisable();
	$('#letterContainer').hide();
	$('#gridContainer').show();
	$('#badArea').on('click', function(e){
		endGame();
	})
	$('.picol_avatar').on('click', function(e){
		$('.picol_avatar').css('color', 'red')
		$('#overlays').css('display','flex');
		$('#howard').show();
		$('#memo').hide();
	})
	$('#howard').on('click',function(e){
		$('#howard').hide();
		$('#howard2').show();
	})
	$('#howard2').on('click',function(e){
		$('#howard2').hide();
		$('#gridContainer').hide();
		$('#overlays').hide();
		inputEnable();
	})
}

//Paper Clip Icon

$('.picol_attachment').on('click',function(e){
		$('ul').hide();
		$('.picol_attachment').hide();
		$('#letterContainer').show();
		$('button').text('user');

})

//Slusho

function slusho(){
	$('#overlays').css('display', 'flex');
	$('#slusho').fadeIn(300);
	$('#slusho').css({
    transition: '1s linear',
    transform: 'rotate(' + 360 + 'deg)'
  	});
	$('#slusho').fadeOut(900);
	$('li:nth-child(3) , li:nth-child(4), li:nth-child(6) , li:nth-child(8) , li:nth-child(9)').css('color', 'red').css('text-decoration','line-through');
	setTimeout(function(){
		$('#overlays').css('display','none');
		$('#slusho').remove();
	},2000)
}	

// Timer
var numberCounter = 20;
function setTimer(){
// var counter = 50;
var countdown = setInterval(function(){
	numberCounter --;
	if(numberCounter > 0){
	$('#time').text(numberCounter);
	}
	else{
		numberCounter === 0;
		endGame();
		};
	},2000);
};

function setGame(){
	$('#timeDiv').show();
}

// Bold.Futura
 function bold(){
 	$('#bfLogo').show();
 	$('li:nth-child(2)').css('color','red').css('text-decoration','line-through');
 	$( "#bfLogo" ).click(function() {
  		$( "#timeText" ).slideDown( "slow", function() {
  		});
	});
}

//Bold.Futura Solution

function boldSolution(){
			numberCounter = 51;
			$('time').text('51');
			$('#bfLogo').hide();
			$('#timeText').hide();
			$('textarea').append('bold.futura=is ');

}

//Help.me Solution

function helpMe(){
	$('textarea').append('help.me=over ');
    $('ul').show();
	$('#letterContainer').hide();
	$('button').text('login');
	$('.picol_attachment').remove();
}

//Howard's Solution

function howard(){
	$('textarea').append('h.stambler=the ')
    $('ul').show();
    $('#order').show();
}

//Tagruato Solution

function tagruatoSolution(){
	$('textarea').append('tagruato=search ')
}

//Input Box

$('#input').keydown(function(event){
	if(event.keyCode == '13'){
		$('#submit').click();
		}
});

var counter = 0;
$('#submit').on('click',function(e){                
	if( $('#input').val() === 'thesearchisover') {
		$('#access').show();
        $('#access').text('ACCESS GRANTED');
        $('#access').css('color','#00fcdd')
	}
    else{
    	counter++
    	$('#attempts').text('attempts: ' + counter + ' of 10');
    	$('#access').show();
        $('#access').text('ACCESS DENIED');
        if(counter === 1){
        	setTimeout(function(){
        	$('#access').hide();
        	$('#input').val('')
        	},2000);
        	 setGame();
        	 setTimer();
        	 }
        if ($('#input').val() === 'tagruato'){
        	tagruato();
        }
        if ($('#input').val() === 'help.me'){
        	$('.picol_attachment').show();
        	$('li:nth-child(5)').css('color','red').css('text-decoration','line-through');
        }

        if ($('#input').val() === 'h.stambler'){
        	setTimeout(function(){
        	$('#access').hide();
        	$('#input').val('')
        	},2000);
        	$('li:nth-child(7)').css('color','red').css('text-decoration','line-through');
			clueOne();
        }

        if ($('#input').val() === 'bold.futura'){
        	bold();
        }

        if ($('#input').val() === 'slusho'){
        	slusho();
        }
        
        if ($('#input').val() === '10/28'){
        	endGame();
        }
        if ($('#input').val() === '7825gk'){
        	endGame();
        }
        if ($('#input').val() === 'official.us'){
        	endGame();
        }
        if ($('#input').val() === 'login'){
        	endGame();
        }
        
		//Solutions

		if ($('#input').val() === 'chuaistation'){
        	if(tagruatoClue === true){
        	tagruatoSolution();
        	tagruatoClue = false;
        	}
        }

        if ($('#input').val() === '0m7'){
        	if(howardClue === true){
        	howard();
        	howardClue = false;
        	}
        }
        if ($('#input').val() === 'radioman70'){
        	if(firstRadioMan === true){
			helpMe();
			firstRadioMan = false;
			}
		}
		
		if ($('#input').val() === 'time'){
			if(firstTime === true){
			boldSolution();
			$('li:nth-child(2)').css('color','red').css('text-decoration','line-through');
			firstTime = false;
			}
		}
        
       	if(counter === 10){
        	endGame();
        }
       }
	
	setTimeout(function(){
        	$('#access').hide();
        	$('#input').val('')
        },2000);
});

//End Game Stuff

$('#reloadBtn').on('click',function(e){
	location.reload();
});

function endGame(){
	$('#time').hide();
	$('#gamePage').css('display', 'none');
	$('#busted').show();
	$('#logo').hide();
	$('#startBtn').hide();
	$('#reloadBtn').show();
	$('#pageOne').css('display', 'flex')
	$('#siren').prop('volume','.05');
	$('#siren').trigger('play');
};




 















