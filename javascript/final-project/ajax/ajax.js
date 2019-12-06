$(function() {

	// Remove old then add the new content
	function updateContent(url){
		$('#container').remove();
		$('#content').load(url + ' #container').hide().fadeIn('700');
	}

	// Get the link as $ object
	var $this = $(this);

	// Remove and add current page indicator
	$('a').removeClass('current');
	$this.addClass('current');
	updateContent("ajax-data.html");

 });
