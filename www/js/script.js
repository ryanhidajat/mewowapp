$(document).on("pageinit", ".ui-page", function () {
	console.log('any page loaded');
});

$( document ).delegate("#home-page", "pageinit", function() {    
	console.log('home page loaded');
	

});

function refreshPage()
{
    jQuery.mobile.changePage(window.location.href, {
        allowSamePageTransition: true,
        transition: 'flip',
        reloadPage: true
    });
}

//beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
//complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner

jQuery(function($) {

    $.getJSON('http://mewow.dewitech.com/shop/?json=get_recent_posts&callback=?')
        .success(function(response) {
			
		i = 0;
		while (i < 30) {
			
			$("#image").append("<li class='ui-grid-a'><img src='" + response.posts[i].thumbnail + "' /><br /><a href='" + response.posts[i].slug + "' >" + response.posts[i].title + "</a><br>" + response.posts[i].content + "</li>");

			i++;
			}
        });
});

