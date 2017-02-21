
// //Start Page

$('#startBtn').on('click',function(e){ 
	$('#gif').show();
	$('#audio').prop('volume','.05');
	$('#audio').trigger('play');
setTimeout(function(e){
	$('#gif').hide();
	},3000); 
	$('#gamePage').css('display','flex');
	$('#pageOne').css('display', 'none')
});

// //Clue One

function clueOne(){
	var iconOne = setInterval(function(){
		$('.picol_rdf').hide();
	},1000)

	var iconTwo = setInterval(function(){
		$('.picol_rdf').show();
	},2000)

	$('.picol_rdf').on('click', function(e){
		$('#overlays').css('display','flex')
		$('#memo').show();
	})

	$('#memo').on('click',function(e){
		clueTwo();
		$('#overlays').css('display','none')
		$('.picol_rdf').hide();
		clearInterval(iconOne)
		clearInterval(iconTwo)
	})
}

function clueTwo(){
	$('#gridContainer').show();
	$('.picol_avatar').on('click', function(e){
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
	})
}



//Timer

function setTimer(){
var counter = 75;
var countdown = setInterval(function(){
	counter --;
	if(counter > 0){
	$('#time').text(counter);
	}
	else{
		counter === 0;
		$('#time').hide();
		$('#gamePage').css('display', 'none');
		$('#busted').show();
		$('#logo').hide();
		$('#startBtn').hide();
		$('#pageOne').css('display', 'flex')
		$('#reloadBtn').show();
		$('#siren').prop('volume','.05');
		$('#siren').trigger('play');
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
	if( $('#input').val() === 'X3478SJ') {
		$('#access').show();
        $('#access').text('ACCESS GRANTED');
	}
    else{
    	counter++
    	$('#attempts').text('attempts: ' + counter + ' of 7');
    	$('#access').show();
        $('#access').text('ACCESS DENIED');
        if ($('#input').val() === 'help.me'){
        	$('.picol_attachment').show();
        	$('.picol_attachment').fadeOut(5000);
        }
        if(counter === 3){
        	$('#access').hide();
        	 setGame();
        	 setTimer();
        	 $('#clueOne').show();
        	 clueOne();
        	 $('#wrong').hide();
        	 $('#howardsMark').css('color','red')
        	 $('#howardsMark').fadeOut(2000)
        	}
        else if(counter === 4){
        	$('.picol_attachment').hide();
        }
        else if(counter === 7){
        	$('#time').hide();
			$('#gamePage').css('display', 'none');
			$('#busted').show();
			$('#logo').hide();
			$('#startBtn').hide();
			$('#reloadBtn').show();
			$('#pageOne').css('display', 'flex')
			$('#siren').prop('volume','.05');
			$('#siren').trigger('play');
        }
       }
	
	setTimeout(function(){
        	$('#access').hide();
        	$('#input').val('')
        },2000);
});

$('#reloadBtn').on('click',function(e){
	location.reload();
})

















