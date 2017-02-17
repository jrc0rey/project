console.log('hi')



$('#startBtn').on('click',function(e){
	$('#gif').css('visibility', 'visible');
	setTimeout(function(){
	$('#gif').css('visibility', 'hidden')
	$('#gamePage').css('background-color','black');
	$('#pageOne').remove();
	$('#gamePage').css('visibility', 'visible')
	},2000);

})










