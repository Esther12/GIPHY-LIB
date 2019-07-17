var apiKey = "4tk6Du0rBvIooneYCYnhNOPkGvcLUnET";
var q = "";
var limit = "";
var rating = "";

var queryUrl = "";



//get the input value from html
function getButtonInfo(){
    limit = $("#limitDisplay").val();
    p = $("#pDisplay").val();
    rating = $("#rating").val();
}


//addgifbutton on click

$("#addButton").on("click", function(){
    debugger;
    p = $("#pDisplay").val();
    $("#buttonDisplay").append(addButton(p));
})

function addButton(name){
    var html = `<button class = " btn btn-info" value = "${queryUrl}" onclick=displyGif()>${name}</button>`;
    return html;
}

function displayGif(queryUrl){
    // getButtonInfo();
    // queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + 
    //             apiKey +
    //             "&q=" + q +
    //             "&limit=" + limit +
    //             "&rating=" + rating + "lang=en";
    $.ajax({
        url: queryUrl,
        method: 'GET'
    }).then(function(response){
        for(let i = 0; i < parseInt(limit); i++){
            var results = response.data;
            var animalDiv = `<div>`
                            + `<p>${results[i].title}</p>`
                            + `<img src = "${results[i].images.fixed_width.url} ">`
                            + `</div>`;
            $("#imageDisplay").preppend(animalDiv);
        }
    })
}