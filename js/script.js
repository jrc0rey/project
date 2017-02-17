


// $('#startBtn').on('click',function(e){
// 	$('#gif').show();
// 	$('#audio').prop('volume','.01');
// 	$('#audio').trigger('play');
// setTimeout(function(){
// 	$('#gif').hide()
// 	$('#gamePage').css('background-color','black');
// 	$('body').css('background-color','black');
// 	$('#pageOne').hide();
// 	$('#gamePage').css('display', 'flex')
// 	},3000);

// })

$('#input').keydown(function(event){
	if(event.keyCode == '13'){
		$('#submit').click();
		}
});

$('#submit').on('click',function(e){                
	if( $('#input').val() === 'X3478SJ') {
		$('#access').show()
        $('#access').text('ACCESS GRANTED')
	}
    else{
    	$('#access').show()
        $('#access').text('ACCESS DENIED')
    }
	setTimeout(function(){
        	$('#access').hide()
        	$('#input').val('')
        },2000)
});











