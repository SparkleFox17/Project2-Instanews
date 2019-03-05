$(function () { //is shorthand for document.ready
    //jquery event listener, function=waiting for document to be ready, than will execute
    $("#selector").on('change', getSelection); // who when what how,on has 2 peramitors 1st event listening for in this case somethng changes 2nd is gt selection a call back function
    // selector=interactive selector, on=when user , getselection= call back function will be triggered.
}); 

function getSelection() { //
    let selection = $("#selector").val(); // let= is a variable decloration  selection=variable  seclector= element in question and  value= your getting the info from the selector
    console.log(selection); // console.log sees whats on the site but doesnt show up on website

    $('<p class="loading"><img src="./imgs/ajax-loader.gif" width="200"></p>').insertAfter('#header');
    //the element in the selector gets inserted into the DOM after the element with the id header.
   
    let key = "F5eaciDwJVMg7O5nc01lbngH0BzHD23e";//
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+selection+"&api-key="+key+"";//let url = declaring variable, assigning a value which is the string.
    //url above we see , key is the api key we need in order to retrive permission for information 

    // let url ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports&api-key=F5eaciDwJVMg7O5nc01lbngH0BzHD23e";
    // this is what url actually is in the end. what the computer reads


    $.getJSON(url) // $=jquery, getjson is a method, and your variable is url which is the link to website.JSON data
    .done(function(data){ // done 
        //console.log(data);
        $('#header').addClass('short'); //header element with id#, adding a class called short, 
        $.each(data.response.docs, function(key, value){ //.method (.each) will take an array (the 3) and using a callback function, key= total what you have l-r ex 1,2,3,4,5. value is name of each array
            //adjust list item to contain artical info as needed
            $('#nyt-list').append('<li class="article" style="background-image:url(https://static01.nyt.com/'+value.multimedia[14].url+');"> <a href="'+value.web_url+'" target="_blank"><p>'+value.snippet+'</p></a></li>');     
            //#nyt-list =class selector, .append= li=element, class, + =c nctination which means joining things together.
            console.log(value);
        });
    })
    .fail(function(){
        $('#nyt-list').append('<li>Sorry there was an error.</li>'); // nyt-list is the jquery element in question, append =appending content to a selective element 
    })
    .always(function(){ //this you always add in code for jason because you want the it to run done or fail 
        $('.loading').remove(); // .loading = selector element, remove=removing element
    });
} 

//done, fail, always are callback methods in json. // done= when done, fail= if it fails = always =  will be executed either pay pass or fail, will work either way 