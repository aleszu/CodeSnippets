
// BRING IN YOUR AUDIO FILES HERE

var audioOne = 'https://d63kb4t2ifcex.cloudfront.net/201505horton/mp3/Horton_ImNotThisPicture.mp3';  // replace these with your audio files 
var	audioTwo = 'https://d63kb4t2ifcex.cloudfront.net/201505horton/mp3/Horton_WeHadBackThen.mp3';  // replace these with your audio files
var	audioThree = 'https://d63kb4t2ifcex.cloudfront.net/201505horton/mp3/Horton_IveNeverBeen.mp3';  // replace these with your audio files
var	audioFour = 'https://d63kb4t2ifcex.cloudfront.net/201505horton/mp3/Dukakis_OneOfTheValuesofFurlough.mp3';  // replace these with your audio files

// SET YOUR SCROLL BREAKPOINTS HERE

var breakOne = 0;
var	breakTwo = 1200;
var	breakThree = 1800;
var	breakFour = 2400;

// SET YOUR AUDIO FILE TITLES

var titleOne = 'LISTEN: This is the first audio file';
var	titleTwo = 'LISTEN: This is the second audio file';
var	titleThree = 'LISTEN: This is the third audio file';
var	titleFour = 'LISTEN: This is the fourth audio file';

// DO THE STUFF

var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', audioOne);
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
			}, 600);
		});



	// collapses the bug 5 seconds after loading
	function removeBumper() {
		setTimeout(function() {
			$('.audioBug > h6').fadeOut(500, function() {
				$('.audioBug').removeClass('expanded');
			});
		}, 5000);
	}


	//page loads, audio bug expands to reveal title, then collapses again
	setTimeout(function() {
		$('.audioBug').addClass('expanded');
	}, 2000);
	setTimeout(function() {
		$('.audioBug > h6').fadeIn(500, function() {
			removeBumper();
		});
	}, 2700);

	//scrolling past set points changes out the audio file/title and expands the bug anew

	window.addEventListener("scroll",function() { 
	   if(window.scrollY > breakOne && window.scrollY < breakTwo) {
	      audioElement.setAttribute('src', audioOne);
	      $('h6.audio-title').text( titleOne );
	   }
	   else if(window.scrollY > breakTwo && window.scrollY < breakThree){
	      audioElement.setAttribute('src', audioTwo);
	      $('h6.audio-title').text( titleTwo );
	   }
	   else if(window.scrollY > breakThree && window.scrollY < breakFour){
	      audioElement.setAttribute('src', audioThree);
	      $('h6.audio-title').text( titleThree );
	   }
	   else if(window.scrollY > breakFour){
	      audioElement.setAttribute('src', audioFour);
	      $('h6.audio-title').text( titleFour );
	   }
	},false);