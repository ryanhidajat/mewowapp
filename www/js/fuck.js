blog: function(){
  $.ajax({
    url: 'http://mewow.dewitech.com/api/get_recent_posts/',
    type: 'GET',
    dataType: 'json',
    success: function(data){
      console.log(data);
    },
    error: function(data){
      console.log(data);
    }
  });
  
  $('#all-posts').on('click','li', function(e){   
  localStorage.setItem('postData', JSON.stringify(data.posts[$(this).index()]));
});