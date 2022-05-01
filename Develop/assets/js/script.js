 
 var scheduleBlocksEl = $("#schedule").find("section");
 var currentTime = moment();

scheduleBlocksEl.each(function(index){
    var id = $(this).attr('id');
    $("#" + id + " .col-10").val(localStorage.getItem(id));
})
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
        var text = $(this).siblings(".col-10").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text); 
})

$("#schedule").on("click", ".col-10", function() {
    var text = $(this).text();
    var textInput = $("<textarea>")
    .addClass($(this).attr('class'))
    .val(text);
    $(this).append(textInput);
    textInput.trigger("focus");
    
})

