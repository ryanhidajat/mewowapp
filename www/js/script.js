$(document).on("pageinit", ".ui-page", function () {
	console.log('any page loaded');
jQuery(function($) {

    $.getJSON('http://mewow.dewitech.com/?json=get_recent_posts&callback=?&post_type=product&page=1&count=10')
        .success(function(response) {
			
		i = 0;
		while (i < 10) {
			
			$("#page1").append("<li class='ui-grid-a'><img src='" + response.posts[i].thumbnail + "' /><br /><a href='" + response.posts[i].slug + "' >" + response.posts[i].title + "</a><br>" + response.posts[i].content + "</li>");

			i++;
			}
        });
});

jQuery(function($) {

	$.getJSON('http://mewow.dewitech.com/?json=get_recent_posts&callback=?&post_type=product&page=2&count=10')
		.success(function(response) {
			
		i = 0;
		while (i < 10) {
			
			$("#page2").append("<li class='ui-grid-a'><img src='" + response.posts[i].thumbnail + "' /><br /><a href='" + response.posts[i].slug + "' >" + response.posts[i].title + "</a><br>" + response.posts[i].content + "</li>");

			i++;
			}
		});
	});
	

jQuery(function($) {

	$.getJSON('http://mewow.dewitech.com/?json=get_recent_posts&callback=?&post_type=product&page=3&count=10')
		.success(function(response) {
			
		i = 0;
		while (i < 10) {
			
			$("#page3").append("<li class='ui-grid-a'><img src='" + response.posts[i].thumbnail + "' /><br /><a href='" + response.posts[i].slug + "' >" + response.posts[i].title + "</a><br>" + response.posts[i].content + "</li>");

			i++;
			}
		});
	});	
});

$( document ).delegate("#home-page", "pageinit", function() {    
	console.log('home page loaded');
	

});

//beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
//complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner



