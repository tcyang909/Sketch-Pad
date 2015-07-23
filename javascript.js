$(document).ready(function() {
	creation(16);

	$('#pixelgrid').on('mouseover','.square',function(){
		$(this).css("background-color","black");
	});
	
	$("button").click(function (){
		var size = prompt("Enter grid dimention: ");
		destruction();
		creation(size);
	});

	function destruction(){
		$(".square").remove();
	}

	function creation(n){
		var size = 960
		var boxSize = (size- 4*n)/n;
		var $grid = $('#pixelgrid');
		for (i = 1; i <= n; i++) 
		{
		    for (j = 1; j <= n; j++)
		        $grid.append($('<div></div>').addClass("square").height(boxSize).width(boxSize));
		    $grid.append($('<div></div>').css("clear", "both"));
		}
	}
});