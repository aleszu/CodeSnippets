	var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'http://res.dallasnews.com/interactives/country-dallas/audio/countryCaravan.mp3');
        audioElement.setAttribute('preload', 'auto');
        //audioElement.load()
        $.get();
        audioElement.addEventListener("load", function() {
        audioElement.play();
        }, true);

        // controls the playing of the audio

		$('.audioBug').click(function() {

        	if ($(this).hasClass('playing')) {
        		audioElement.pause();
        		$(this).removeClass('playing');
        	} else {
        		audioElement.play();
        		$(this).addClass('playing');
        	}
        });

		//hovering over the bug expands it to reveal the audio title. 

			$('.audioBug').hover(function() {
				$(this).addClass('expanded');
				setTimeout(function() {
					$('.audioBug > h6').fadeIn(500);	
				}, 600);
			}, function() {
				$('.audioBug > h6').fadeOut(500);
				setTimeout(function() {
					$('.audioBug').removeClass('expanded');
				}, 600)
			})


	
		// collapses the bug 5 seconds after loading
		function removeBumper() {
			setTimeout(function() {
				$('.audioBug > h6').fadeOut(500, function() {
					$('.audioBug').removeClass('expanded');
				})
			}, 5000)
		}


		//page loads, audio bug expands to reveal title, then collapses again
		setTimeout(function() {
			$('.audioBug').addClass('expanded');
		}, 2000);
		setTimeout(function() {
			$('.audioBug > h6').fadeIn(500, function() {
				removeBumper();
			})
		}, 2700);