$(document).ready(function() {

    function adjustNav() {
        var windowWidth = $(window).width();
        if (windowWidth <= 1024 && windowWidth >= 769) {
          // Show the "More" dropdown and hide specific nav items
        $(".more-dropdown").show();
          $(".nav-links > li").slice(5, 9).hide(); // Adjust indices if necessary
        } else {
          // Hide the "More" dropdown and show all nav items
        $(".more-dropdown").hide();
          $(".nav-links > li").slice(5, 9).show(); // Adjust indices if necessary
        }
    }
    
      // Adjust nav on page load
    adjustNav();
    
      // Adjust nav whenever window is resized
    $(window).resize(adjustNav);

  // Script for hamburger menu
$(".hamburger-menu").click(function() {
    $("#mobile-nav").slideToggle("slow");
});

    // Script for dropdown on click
    $('.dropdown > a').on('click', function(e) {
        e.preventDefault(); // Prevent the default action of the anchor tag

        // Only proceed if the clicked element doesn't have a parent dropdown
        if ($(this).parents('.dropdown').length === 1) {
            var dropdownContent = $(this).next('.dropdown-content');
            dropdownContent.slideToggle("slow");

            // Toggle "active" class for the clicked dropdown
            $(this).parent('.dropdown').toggleClass('active');

            // Close other dropdowns and remove their "active" class
            $('.dropdown').not($(this).parent('.dropdown')).find('.dropdown-content').slideUp("slow");
            $('.dropdown').not($(this).parent('.dropdown')).removeClass('active');
        }
    });

    // Separate handler for nested dropdowns
    $('.dropdown .dropdown .dropdown-toggle').on('click', function(e) {
        e.stopPropagation(); // Prevent this event from bubbling up to the parent dropdown

        // Your code for handling nested dropdowns here
        var dropdownContent = $(this).next('.dropdown-content');
        dropdownContent.slideToggle("slow");
        
        // Toggle "active" class for the clicked dropdown
        $(this).parent('.dropdown').toggleClass('active');
    });

});
