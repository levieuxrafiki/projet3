$(window).on('load', function() {
    setTimeout(displaySite, 2000);

    /**
     * Hide loader and display the content.
     */
    function displaySite() {
        $(".spinner").hide();
        $('.header').show();
        $('.footer').show();
        $('.main').show();
    }
});

