// Morakuls

function askMorakul() {
    let question = $("#answer-text").val();
    let truth = Math.random() >= 0.4;
    console.log(truth);
    let answer = "";
    if (truth == true) {
        answer = "Jā";
    } else {
        answer = "Nē";
    }

    $("#question").html(question);
    $("#response").html(answer);

    $(".result").addClass("visible");

    setTimeout(function(){ 
        $(".result").addClass("morra-fly-in");
    }, 1000);

    setTimeout(function(){ 
        $(".result").addClass("content-visible");
    }, 5000);
};

function resetFields() {
    $(".result").removeClass("visible");
    $(".result").removeClass("morra-fly-in");
    $(".result").removeClass("content-visible");
    $("#answer-text").val("");
}

$("#askButton").click(function() {
    askMorakul();
});

$("#resetButton").click(function() {
    resetFields();
});

$(document).on('keypress',function(e) {
    if(e.which == 13) {
        askMorakul();
    }
});
