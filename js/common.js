$(document).ready(function() {

	var date = new Date();

	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();

	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;

	var today = year + "-" + month + "-" + day;

	document.getElementById('check-in').value = today;


//*  owl courusel  *//

    $('.custom1').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        1000:{
            items:3
        },
        1900:{
            items:4
        }
    }
    })

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        1000:{
            items:5
        }
    }
	})

//*  owl courusel  *//

});

