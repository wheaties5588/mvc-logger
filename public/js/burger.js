$(function() {    

    $(".burger-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var burger = {
            name: $("#burger-input").val().trim()
        };
        
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: burger
        }).then(
            function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
            }
        );
        });
    
});