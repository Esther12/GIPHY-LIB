var apiKey = "4tk6Du0rBvIooneYCYnhNOPkGvcLUnET";
var q = "";
var limit = "";
var rating = "";
var queryUrl = "";

//get the input value from html
function getButtonInfo(){
    limit = $("#limitInput").val();
    p = $("#pInput").val();
    rating = $("#ratingInput").val();
}

//addgifbutton on click
$("#addButton").on("click", function(){
    //debugger;
    getButtonInfo();
    queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + 
                apiKey +
                "&q=" + p +
                "&limit=" + limit +
                "&offset=0&rating=" + rating + "&lang=en";
    $("#buttonDisplay").append(addButton(p));
})

//give button a name from pinput
function addButton(name){
    var html = `<button class = " btn btn-info" onclick="displayGif('${name}')">${name}</button>`;
    return html;
}
$("#a").on("click",function(){
    displayGif("https://api.giphy.com/v1/gifs/search?api_key=4tk6Du0rBvIooneYCYnhNOPkGvcLUnET&q=cat%20and%20dog&limit=25&offset=0&rating=Y&lang=en");
})
function displayGif(q){
    queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + 
                apiKey +
                "&q=" + q +
                "&limit=" + 10 +
                "&offset=0&lang=en";
    debugger;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        for(let i = 0; i < parseInt(limit); i++){
            //for(let i = 0; i < 25; i++){
            var results = response.data;
            var animalDiv = `<div>`
                            + `<p>${results[i].title}</p>`
                            + `<img src = "${results[i].images.downsized_still.url}" data-still="${results[i].images.downsized_still.url}" data-animate="${results[i].images.downsized.url} " data-state="still" class = "gif m-2">`
                            + `</div>`;
            $("#imageDisplay").prepend(animalDiv);
        }
        console.log(response);
    })
}
$("#imageDisplay").on("click",".gif", function(){
    debugger;
    var state = $(this).attr("data-state");

    if(state == "still"){
        var animateImgAddress = $(this).attr("data-animate");
          $(this).attr("src", animateImgAddress);
          $(this).attr("data-state","animate");
      }else{
        var animateImgAddress = $(this).attr("data-still");
          $(this).attr("src", animateImgAddress);
          $(this).attr("data-state","still");
      }
})