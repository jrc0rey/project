
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

//Clues

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

function clueTwo(){
	inputDisable();
	$('#gridContainer').show();
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



$('.picol_attachment').on('click',function(e){
		inputDisable();
		$('ul').hide();
		$('.picol_attachment').hide();
		$('#letterContainer').show();
		$('button').text('user');
})





// Timer

function setTimer(){
var counter = 200;
var countdown = setInterval(function(){
	counter --;
	if(counter > 0){
	$('#time').text(counter);
	}
	else{
		counter === 0;
		endGame();
		};
	},2000);
};

	
function setGame(){
	$('#timeDiv').show();
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
        if ($('#input').val() === 'help.me'){
        	$('.picol_attachment').show();
        	$('li:nth-child(5)').css('color','red');
			$('li:nth-child(5)').fadeOut(3000);
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
        
        if ($('#input').val() === 'h.stambler'){
        	setTimeout(function(){
        	$('#access').hide();
        	$('#input').val('')
        	},2000);
        	// $('#wrong').hide();
        	$('li:nth-child(7)').css('color','red')
        	$('li:nth-child(7)').fadeOut(3000)
        	clueOne();
        }
        
        //Solutions

        if ($('#input').val() === '0m7'){
        	$('textarea').append('h.stambler=the ')
        	$('ul').show();
        }
        if ($('#input').val() === 'radioman70'){
        	$('textarea').append('help.me=over ');
        	$('ul').show();
			$('#letterContainer').hide();
			$('button').text('login');
		}
        
        else if(counter === 10){
        	endGame();
        }
       }
	
	setTimeout(function(){
        	$('#access').hide();
        	$('#input').val('')
        },2000);
});

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




 















