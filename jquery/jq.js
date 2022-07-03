$(document).ready(function(){
	$('#b1').click(function(){
		$('#a1').toggle();
	});
});

$(document).ready(function(){
	$('#a22').hide();
	$('#b2').click(function(){
		($('#a21').is(":visible"))?(($('#a21').hide())&&($('#a22').show())):(($('#a22').hide())&&($('#a21').show()));
	});
});

$(document).ready(function(){
	$('#b3').click(function(){
		$('#a3').toggleClass("three");
	});
});

$(document).ready(function(){
	$('#b4').on({
		"click":function(){
			$('#a4').addClass("three");
		},
		"dblclick":function(){
			alert("double click");
		}
	});
});