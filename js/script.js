
//Start Page

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

//Clue One

function clueOne(){
	setInterval(function(){
		$('.picol_rdf').hide();
	},1000)

	setInterval(function(){
		$('.picol_rdf').show();
	},2000)
}

//Timer

function setTimer(){
var counter = 50;
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
    	$('#attempts').text('attempts: ' + counter + ' of 10');
    	$('#access').show();
        $('#access').text('ACCESS DENIED');
        if(counter === 3){
        	$('#access').hide();
        	 setGame();
        	 setTimer();
        	 $('#clueOne').show();
        	 clueOne();
        	 $('#wrong').hide();
        	}
        else if(counter === 10){
        	$('#time').hide();
			$('#gamePage').css('display', 'none');
			$('#busted').show();
			$('#logo').hide();
			$('#startBtn').hide();
			$('#pageOne').css('display', 'flex')
        }
       }
	
	setTimeout(function(){
        	$('#access').hide();
        	$('#input').val('')
        },2000);
});

















