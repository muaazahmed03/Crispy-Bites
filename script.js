// <!-- JavaScript to replace background image with video -->
    // Replace background image with video after 3 seconds
    setTimeout(function() {
        var section = document.getElementById('heroSection');
        section.style.backgroundImage = 'none'; // Remove the background image
        
        // Create a video element
        var video = document.createElement('video');
        video.src = 'VID-20241019-WA0056.mp4'; // Replace with your video file
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.classList.add('hero-video');
        
        // Append video to the hero section
        section.appendChild(video);
        video.style.display = 'block'; // Display the video after adding
    }, 3000); // 3 seconds delay


    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        items: 1,          // Shows one card at a time
        loop: true,        // Infinite loop
        margin: 5,         // Reduce margin (gap) between cards
        nav: true,         // Show navigation buttons
        autoplay: true,    // Auto play
        autoplayTimeout: 3000,  // 3 seconds delay
        autoplayHoverPause: true,  // Pause on hover
        navText: ["<", ">"],   // Customize navigation buttons
        responsive: {
            0: {
                items: 1  // Show one card on small screens
            },
            600: {
                items: 2  // Show two cards on medium screens
            },
            1000: {
                items: 3  // Show three cards on large screens
            }
        }
      });
    });
    


    function showCategory(categoryId) {
        document.querySelectorAll('.menu-category').forEach(category => {
            if (category.id === categoryId) {
                category.style.display = 'flex';
                category.classList.add('fadeIn');
            } else {
                category.style.display = 'none';
                category.classList.remove('fadeIn');
            }
        });
    
        document.querySelectorAll('.menu-list div').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`.menu-list div[onclick="showCategory('${categoryId}')"]`).classList.add('active');
    }
    
    document.addEventListener('DOMContentLoaded', () => {
        showCategory('burgers'); // Show first category by default
    });

    

    