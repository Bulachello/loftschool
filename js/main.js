$(function () {

	// sections changer

	var changeSection = function(index) {
		$('.wrapper')
			.find('nav-buttons__link')
			.eq(index)
			.addClass('nav-buttons__link-active')
			.siblings()
			.removeClass('nav-buttons__link-active');
	}

	var generateDonts = function () {
		$('section').each( function() {
			var dot = $('<li>', {
				attr : {
					class : 'nav-buttons__item'
				},
				html : '<a href="#" class="nav-buttons__link"></a>'
			});

			$('.nav-buttons__list').append(dot);
		})
	};

	generateDonts();

	var moveSlide = function() {

	}

	$('body').on('click', 'nav-buttons__link', function() {
		var $this = $(this),
			container = $this.closest('.wrapper'),
			index = $this.index();


		changeSection(index);
	})

	$(window).scroll( function() {
		checkSection();
	})

	var checkSection = function() {
		$('section').each(function(){
			var $this = $(this),
				topEdge = $this.offset().top,
				bottomEdge = topEdge + $this.height(),
				wScroll = $(window).scrollTop();

			if(topEdge < wScroll && bottomEdge > wScroll) {
				var
					currentId = $this.data('section');
					console.log(currentId);
			}

		})
	}

	
})

