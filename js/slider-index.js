$(document).ready(function () {

	$('#js-main-slider').pogoSlider({
		autoplay: true,
		autoplayTimeout: 5000,
		displayProgess: true,
		preserveTargetSize: true,
		targetWidth: 1000,
		targetHeight: 300,
		responsive: true
	}).data('plugin_pogoSlider');

	var transitionDemoOpts = {
		displayProgess: false,
		generateNav: false,
		generateButtons: false
	}

});
$(document).ready(function(){
    $("#project-single-carousel").owlCarousel({
        items: 1,              /* Show 1 image at a time */
        loop: true,            /* Infinite loop */
        margin: 10,            /* Space between slides */
        autoplay: true,        /* Auto-play enabled */
        autoplayTimeout: 3000, /* Change image every 3 seconds */
        autoplayHoverPause: true, /* Pause on hover */
        nav: true,             /* Show navigation arrows */
        dots: true,            /* Show dots for navigation */
        navText: ["<", ">"]    /* Custom navigation arrows */
    });
});

/*-----------------About us second javascript start--------*/
// Slider Functionality
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".slider-dots .dot");

let currentIndex = 0;

//Update Slider Position
function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

//Dot Navigation
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
    });
});

//Auto Slide (Optional)
setInterval(() => {
    if (currentIndex < dots.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}, 5000); 
//Change slide every 5 seconds


/*-------------About us third start---------------*/
// Slider Functionality
// const slides = document.querySelector(".slides");
// const prevArrow = document.querySelector(".slider-arrow.prev");
// const nextArrow = document.querySelector(".slider-arrow.next");
// const dots = document.querySelectorAll(".slider-dots .dot");

// let currentIndex = 0;

// Update Slider Position
// function updateSlider() {
//     slides.style.transform = `translateX(-${currentIndex * 100}%)`;
//     dots.forEach((dot, index) => {
//         dot.classList.toggle("active", index === currentIndex);
//     });
// }

// Previous Slide
// prevArrow.addEventListener("click", () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//     } else {
//         currentIndex = dots.length - 1;
//     }
//     updateSlider();
// });

// Next Slide
// nextArrow.addEventListener("click", () => {
//     if (currentIndex < dots.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     updateSlider();
// });

// Dot Navigation
// dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//         currentIndex = index;
//         updateSlider();
//     });
// });

// Auto Slide (Optional)
// setInterval(() => {
//     if (currentIndex < dots.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     updateSlider();
// }, 5000); 
// Change slide every 5 seconds

//-------About us Fourth Start---------//
// Slider Functionality
// const slides = document.querySelector(".slides");
// const prevArrow = document.querySelector(".slider-arrow.prev");
// const nextArrow = document.querySelector(".slider-arrow.next");
// const dots = document.querySelectorAll(".slider-dots .dot");

// let currentIndex = 0;

// Update Slider Position
// function updateSlider() {
//     slides.style.transform = `translateX(-${currentIndex * 100}%)`;
//     dots.forEach((dot, index) => {
//         dot.classList.toggle("active", index === currentIndex);
//     });
// }

// Previous Slide
// prevArrow.addEventListener("click", () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//     } else {
//         currentIndex = dots.length - 1;
//     }
//     updateSlider();
// });

// Next Slide
// nextArrow.addEventListener("click", () => {
//     if (currentIndex < dots.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     updateSlider();
// });

// Dot Navigation
// dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//         currentIndex = index;
//         updateSlider();
//     });
// });

// Auto Slide (Optional)
// setInterval(() => {
//     if (currentIndex < dots.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     updateSlider();
// }, 5000); 
// Change slide every 5 seconds


// -------About us Five Start---------//
// $(document).ready(function () {
//     // Initialize Owl Carousel
//     $(".owl-carousel").owlCarousel({
//         items: 1, // Number of items to display
//         loop: true, // Infinite loop
//         nav: true, // Enable navigation arrows
//         dots: true, // Enable navigation dots
//         autoplay: true, // Auto-play slides
//         autoplayTimeout: 5000, // Auto-play interval (5 seconds)
//         responsive: {
//             0: {
//                 items: 1, // 1 item on mobile
//             },
//             768: {
//                 items: 2, // 2 items on tablets
//             },
//             1024: {
//                 items: 3, // 3 items on desktops
//             },
//         },
//     });
// });


// JavaScript for Slider Navigation
const track = document.querySelector(".testimonial-track");
const prevButton = document.querySelector(".slider-button.prev");
const nextButton = document.querySelector(".slider-button.next");
const cardWidth = document.querySelector(".testimonial-card").offsetWidth + 20; // Card width + margin

let scrollPosition = 0;

// Next Button
nextButton.addEventListener("click", () => {
    scrollPosition += cardWidth;
    if (scrollPosition > track.scrollWidth - track.clientWidth) {
        scrollPosition = 0; // Reset to start if at the end
    }
    track.style.transform = `translateX(-${scrollPosition}px)`;
});

// Previous Button
prevButton.addEventListener("click", () => {
    scrollPosition -= cardWidth;
    if (scrollPosition < 0) {
        scrollPosition = track.scrollWidth - track.clientWidth; // Go to the end if at the start
    }
    track.style.transform = `translateX(-${scrollPosition}px)`;
});

document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.getElementById('tooltip');
    const logoLinks = document.querySelectorAll('.logo-link');
    let activeTooltipTimeout;
    
    // Create a single tooltip that follows mouse
    document.addEventListener('mousemove', function(e) {
        tooltip.style.left = (e.clientX + 15) + 'px';
        tooltip.style.top = (e.clientY + 15) + 'px';
    });
    
    // Show tooltip on hover
    logoLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            clearTimeout(activeTooltipTimeout);
            const tooltipText = this.getAttribute('data-tooltip');
            tooltip.textContent = tooltipText;
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0)';
        });
        
        link.addEventListener('mouseleave', function() {
            // Add slight delay before hiding to prevent flickering
            activeTooltipTimeout = setTimeout(() => {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'translateY(10px)';
            }, 100);
        });
    });
    
    // Keep tooltip visible when hovering over it (for edge cases)
    tooltip.addEventListener('mouseenter', function() {
        clearTimeout(activeTooltipTimeout);
    });
    
    tooltip.addEventListener('mouseleave', function() {
        this.style.opacity = '0';
        this.style.transform = 'translateY(10px)';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Close all other items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            const content = item.querySelector('.accordion-content');
            
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
    
    // Optional: Open first item by default
    // accordionItems[0].classList.add('active');
    // accordionItems[0].querySelector('.accordion-content').style.maxHeight = 
    //     accordionItems[0].querySelector('.accordion-content').scrollHeight + 'px';
});