let setservoblock = function () {
    $.ajax({
        type: "POST",
        url: "url",
        data: {
            value: "1"
        },
        success: function (response) {
            console.log("servo set: 1");
        },
        fail:function(response){
            console.log(response);
        }
    });
}

let setservosplit = function () {
    $.ajax({
        type: "POST",
        url: "url",
        data: {
            value: "1"
        },
        success: function (response) {
            console.log("servo set: 1");
        },
        fail:function(response){
            console.log(response);
        }
    });
}