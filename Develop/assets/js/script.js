 
 var scheduleBlocksEl = $("#schedule").find("section");
 var currentTime = moment();


 scheduleBlocksEl.each(function(index){
    var blockTime = moment($(this).find(".hour").text(), "hA");
    if(currentTime.isSame(blockTime, "hour")){
        $(this).find(".col-10").addClass("present");
    }else if(currentTime.isBefore(blockTime, "hour")){
        $(this).find(".col-10").addClass("future");
    }else if(currentTime.isAfter(blockTime, "hour")){
        $(this).find(".col-10").addClass("past");
    }
})

$("#schedule").on("click", ".saveBtn", function() {
    
})

$("#schedule").on("click", ".col-10", function() {
    var text = $(this).text();
    var textInput = $("<textarea>")
    .addClass($(this).attr('class'))
    .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    
})