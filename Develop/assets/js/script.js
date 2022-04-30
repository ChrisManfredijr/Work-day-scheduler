 var scheduleEl = $("#schedule");
 var scheduleBlocksEl = $("#schedule").find("section");
 var currentTime = moment();


scheduleBlocksEl.each(function(index){
    var blockTime = moment($(this).find(".hour").text(), "hA");
    console.log(blockTime);
    console.log(currentTime)
    if(currentTime.isSame(blockTime, "hour")){
        $(this).find(".col-10").addClass("present");
    }else if(currentTime.isBefore(blockTime, "hour")){
        $(this).find(".col-10").addClass("future");
    }else if(currentTime.isAfter(blockTime, "hour")){
        $(this).find(".col-10").addClass("past");
    }
})


