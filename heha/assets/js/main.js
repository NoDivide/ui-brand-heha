$(document).ready(function()
{
    $('.row').fitVids();


    /**
     * Assuming customer has purchased something prior
     * to hitting the the main page a confirmation modal
     * may appear on page load. (This is just and example).
     */
    $(window).load(function() {
        $('#parking-confirmed').modal('show');
    });
});