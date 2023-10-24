$(document).ready(function() {

    function adjustNav() {
        var windowWidth = $(window).width();
        if (windowWidth <= 1024 && windowWidth >= 769) {
        $(".more-dropdown").show();
          $(".nav-links > li").slice(5, 9).hide(); 
        } else {
        $(".more-dropdown").hide();
          $(".nav-links > li").slice(5, 9).show();
        }
    }
    adjustNav();
    $(window).resize(adjustNav);

$(".hamburger-menu").click(function() {
    $("#mobile-nav").slideToggle("slow");
});

    $('.dropdown > a').on('click', function(e) {
        e.preventDefault(); 

        if ($(this).parents('.dropdown').length === 1) {
            var dropdownContent = $(this).next('.dropdown-content');
            dropdownContent.slideToggle("slow");

            $(this).parent('.dropdown').toggleClass('active');

            $('.dropdown').not($(this).parent('.dropdown')).find('.dropdown-content').slideUp("slow");
            $('.dropdown').not($(this).parent('.dropdown')).removeClass('active');
        }
    });

    $('.dropdown .dropdown .dropdown-toggle').on('click', function(e) {
        e.stopPropagation(); 

        var dropdownContent = $(this).next('.dropdown-content');
        dropdownContent.slideToggle("slow");
        
        $(this).parent('.dropdown').toggleClass('active');
    });
    
        var videoContainer = document.querySelector('.video-container');
        if (videoContainer) { 
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
  
  var numOfBalls = 50; // Number of balls showing

  for (var i = 0; i < numOfBalls; i++) {
      var ball = document.createElement("div");
      ball.className = 'ball';
      ball.style.left = Math.random() * 100 + "vw";
      ball.style.top = Math.random() * 100 + "vh";
      ball.style.animationDelay = Math.random() * 2 + "s";
      animatedBackground.appendChild(ball);
  }
}