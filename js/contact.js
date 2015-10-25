$(document).ready(function() {
	$("#contactForm").submit(function() {
	    $.post('contact.php', {name: $('#name').val(), email: $('#email').val(), subject: $('#subject').val(), message: $('#message').val(), formSubmitted: 'yes'}, function(data) {
	        if (data == 1) {
	        	$("#formResponse").html("Contact form successfully submitted - I'll get back to you as soon as I can!").fadeIn(100);
	        	$('#name, #subject, #email, #message').val(''); /* Clear the inputs */
	        } else if (data == 0){
	        	$("#formResponse").html("There was an error q.q").fadeIn(100);
	        }
	        console.log(data)
	    }, 'text');
	    return false;
	});
});