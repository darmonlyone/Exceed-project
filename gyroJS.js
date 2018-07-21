let getgyro = function () {
    $.ajax({
        type: "GET",
        url: "url",
        dataType: "Text",
        success: function (response) {
            console.log("gyro get: " + response);
        },
        fail: function (response) {
            console.log(response);
        }
    });
}
let gyrogetY = function () {
    $.ajax({
        type: "GET",
        url: "url",
        dataType: "Text",
        success: function (response) {
            console.log("gyro get: " + response);
        },
        fail: function (response) {
            console.log(response);
        }
    });
}