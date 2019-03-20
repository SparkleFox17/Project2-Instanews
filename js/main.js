$(function () { 
    $("#selector").on('change', getSelection); 
}); 

function getSelection() { 
    let selection = $("#selector").val(); 
    

    $('<p class="loading"><img src="./imgs/ajax-loader.gif" width="200"></p>').insertAfter('#header');
  
    $('#nyt-list').html("");

    let key = "G1HGkvZ4iEpdFVqhaa1wvsgvB5yWx1iZ";
    let url = "https://api.nytimes.com/svc/topstories/v2/"+selection+".json?api-key="+key+"";


    let maxItems = 0;

    $.getJSON(url) //jquey method endpoint
    .done(function(data){ //
        $('#header').addClass('short'); //
        $.each(data.results, function(key, value){ //for ea art, running function, call funtions to execute statements bel to appen a new list item for each artic. you dynamically cancat the url and img fir the artic.
            if(value.multimedia.length > 0 && maxItems < 12){ //0-11array imgs ,array of nultimedia
                $('#nyt-list').append('<li class="article" style="background-image:url('+value.multimedia[4].url+');"> <a href="'+value.url+'" target="_blank"><p>'+value.abstract+'</p></a></li>');     
                maxItems++; //inerating items up to 12
            }
        });
    })
    .fail(function(){
        $('#nyt-list').append('<li>Sorry there was an error.</li>'); 
    })
    .always(function(){ 
        $('.loading').remove(); 
    });
     
} 

  
