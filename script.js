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

        // JavaScript for adding interactive hover effect to the video container
        var videoContainer = document.querySelector('.video-container');
        if (videoContainer) { // Ensure videoContainer is not null before adding event listeners
            videoContainer.addEventListener('mouseover', function() {
                this.style.border = '4px solid white';
            });
    
            videoContainer.addEventListener('mouseout', function() {
                this.style.border = '2px solid white';
            });
        } else {
            console.error("Couldn't find .video-container element");
        }

        createAnimatedBackground();

});

function createAnimatedBackground() {
  var animatedBackground = document.getElementById('animated-background');
  if (!animatedBackground) {
      console.error("Couldn't find #animated-background element");
      return;
  }
  
  var numOfBalls = 50; // Number of balls you want to show

  for (var i = 0; i < numOfBalls; i++) {
      var ball = document.createElement("div");
      ball.className = 'ball';
      ball.style.left = Math.random() * 100 + "vw";
      ball.style.top = Math.random() * 100 + "vh";
      ball.style.animationDelay = Math.random() * 2 + "s";
      animatedBackground.appendChild(ball);
  }
}