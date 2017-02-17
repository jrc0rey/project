


$('#startBtn').on('click',function(e){
	$('#gif').show();
	$('#audio').prop('volume','.05');
	$('#audio').trigger('play');
setTimeout(function(){
	$('#gif').hide();
	$('#gamePage').css('background-color','black');
	$('body').css('background-color','black');
	$('#pageOne').hide();
	$('#gamePage').css('display', 'flex');
	},3000);
});

function setTimer(){
var counter = 100;
var countdown = setInterval(function(){
	counter --;
	if(counter > 0){
	$('#time').text(counter);
	}
	else{
		counter === 0;
		$('#time').hide();
		};
	},2000);
};
// setTimer();
	
function setGame(){
	$('#timeDiv').show();
}

// setGame();


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
        	youWin();
	}
    else{
    	counter++
    	$('#access').show();
        $('#access').text('ACCESS DENIED');
        if(counter === 3){
        	$('#access').hide();
        	 setGame();
        	 setTimer();
        	}
       }
	
	setTimeout(function(){
        	$('#access').hide();
        	$('#input').val('')
        },2000);
});













