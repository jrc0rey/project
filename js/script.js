


// $('#startBtn').on('click',function(e){
// 	$('#gif').show();
// 	$('#audio').prop('volume','.05');
// 	$('#audio').trigger('play');
// setTimeout(function(){
// 	$('#gif').hide();
// 	},3000);
// 	$('#gamePage').css('display','flex');
// });

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


// Clue one

function hide(){
	$('#clueOne').hide()
}

function show(){
	$('#clueOne').show()
}

setInterval(function(){
	show();
},1000)

setInterval(function(){
	hide();
},2000)
	



//Input

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

















