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


    /**
     * Assuming the standby page will redirect to the
     * confirmation modal I've added a timeout for
     * demonstration purposes. (This is just and example).
     */
    if($('.js-redirect').length)
    {
        setTimeout(function() {
            window.location.replace("/");
        }, 10000);
    }
});