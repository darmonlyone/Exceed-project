let setmotor = function () {
    $.ajax({
        type: "POST",
        url: "url",
        data: {
            value: "1"
        },
        success: function (response) {
            console.log("mortor set: 1");
        },
        fail:function(response){
            console.log(response);
        }
    });
}

let getmotor = function(){
    $.ajax({
        type: "GET",
        url: "url",
        dataType: "Text",
        success: function (response) {
            console.log("mortor get: "+response);
            
        },
        fail:function(response){
            console.log(response);
        }
    });
}