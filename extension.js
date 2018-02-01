(function() {

		$('p').each( function() {
			var words = $(this).text().split(' ');
			var output = '';
			for (i=0; i<words.length; i++) {
				output += '<span>'+ words[i] + '</span> ';
			}
			$(this).html(output);
		});


		$('a').each( function() {
			var words = $(this).text().split(' ');
			var output = '';
			for (i=0; i<words.length; i++) {
					output += '<span>'+ words[i] + '</span> ';	// wrap it with a new class
			}
			$(this).html(output);
		});
    //
		$('th').each( function() {
			var words = $(this).text().split(' ');
			var output = '';
			for (i=0; i<words.length; i++) {
					output += '<span>'+ words[i] + '</span> ';	// wrap it with a new class
			}
			$(this).html(output);
		});

	var $span = $('span'),
	scale = 0.99;

	var $h1 = $('h1'),
	scale = 1.01;


		function scaleUp($elt)
			{
				$elt.animate( { 'font-size': shs }, 4000, function ()
				{
					scaleDown($elt);

				});
			}

		function scaleDown($elt)
			{
				$elt.animate({'font-size': hs }, 4000, function ()
				{
					scaleUp($elt);
				});
			}

			$('span').each( function() {
				h = parseFloat($(this).css('font-size')),
				sh = h*scale;

				hs = h + 'px';
				shs = sh + 'px';
				scaleUp($(this));
			});
			
// do not delete the line below!
})();
