$(function () { 
    $("#selector").on('change', getSelection); 
}); 

function getSelection() { //
    let selection = $("#selector").val(); 
    console.log(selection); 

    $('<p class="loading"><img src="./imgs/ajax-loader.gif" width="200"></p>').insertAfter('#header');
  
    $('#nyt-list').html("");
    let key = "F5eaciDwJVMg7O5nc01lbngH0BzHD23e";//
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+selection+"&api-key="+key+"";//let url = declaring variable, assigning a value which is the string.
  



    $.getJSON(url) 
    .done(function(data){ 
       
        $('#header').addClass('short'); 
        $.each(data.response.docs, function(key, value){ 
           
            $('#nyt-list').append('<li class="article" style="background-image:url(https://static01.nyt.com/'+value.multimedia[14].url+');"> <a href="'+value.web_url+'" target="_blank"><p>'+value.snippet+'</p></a></li>');     
          
            console.log(value);
        });
    })
    .fail(function(){
        $('#nyt-list').append('<li>Sorry there was an error.</li>'); 
    })
    .always(function(){ 
        $('.loading').remove(); 
    });
} 
