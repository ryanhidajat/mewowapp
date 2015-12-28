$(document).on("pageinit", ".ui-page", function () {
	console.log('any page loaded');
});

$( document ).delegate("#home-page", "pageinit", function() {    
	console.log('home page loaded');
	

});

//beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
//complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner

jQuery(function($) {

    $.getJSON('http://mewow.dewitech.com/?json=get_recent_posts&callback=?&post_type=product&page=1')
        .success(function(response) {
			
		i = 0;
		while (i < 30) {
			
			$("#image").append("<li class='ui-grid-a'><img src='" + response.posts[i].thumbnail + "' /><br /><a href='" + response.posts[i].slug + "' >" + response.posts[i].title + "</a><br>" + response.posts[i].content + "</li>");

			i++;
			}
        });
});

jQuery(function($) {

    $.getJSON('http://mewow.dewitech.com/?json=get_recent_posts&callback=?&post_type=product&page=2')
        .success(function(response) {
			
		i = 0;
		while (i < 30) {
			
			$("#image").append("<li class='ui-grid-a'><img src='" + response.posts[i].thumbnail + "' /><br /><a href='" + response.posts[i].slug + "' >" + response.posts[i].title + "</a><br>" + response.posts[i].content + "</li>");

			i++;
			}
        });
});

jQuery(function($) {

    $.getJSON('http://mewow.dewitech.com/?json=get_recent_posts&callback=?&post_type=product&page=3')
        .success(function(response) {
			
		i = 0;
		while (i < 30) {
			
			$("#image").append("<li class='ui-grid-a'><img src='" + response.posts[i].thumbnail + "' /><br /><a href='" + response.posts[i].slug + "' >" + response.posts[i].title + "</a><br>" + response.posts[i].content + "</li>");

			i++;
			}
        });
});