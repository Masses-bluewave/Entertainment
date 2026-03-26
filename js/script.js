window.addEventListener('load', function () {
  
const swiper1 = new Swiper('.swiper-1', {
  // Optional parameters
 
   effect: 'cube',
   grabCursor: true,
   slidesPerView: "auto", // Allows for the continuous flow of elements
   speed: 1000, // Adjust the speed of the animation (higher value = slower speed)
   loop: true, // Essential for continuous looping
   freeMode: true, // Allows for free-flowing, non-snapping movement
   
   cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, // Autoplay continues even after user interaction
    },

});

const swiper2 = new Swiper(".swiper-2", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      initialSlide: 2,
      loop: true, // Essential for continuous looping
      slidesPerView: "2.3", // Allows for the continuous flow of elements
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 250,
        modifier: 2.5,
        slideShadows: true,
      },

      autoplay: {
      delay: 5000, // No delay between transitions
      disableOnInteraction: false, // Autoplay continues even after user interaction
    },
    });

     const glow = document.getElementById('glow');

window.addEventListener('mousemove', (e) => {
    // Calculate mouse position as a percentage of the screen
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    // Update the radial gradient position
    glow.style.background = `
        radial-gradient(
            circle at ${x}% ${y}%, 
            rgba(255, 0, 122, 0.15) 0%, 
            rgba(112, 0, 255, 0.1) 25%, 
            transparent 60%
        )
    `;
});

// Optional: Add a slight "breathing" animation to the card
const card = document.querySelector('.glass-card');
let tick = 0;

function animate() {
    tick += 0.02;
    const s = Math.sin(tick) * 5; // 5px movement
    card.style.transform = `translateY(${s}px)`;
    requestAnimationFrame(animate);
}

animate();

const myOffcanvas = document.getElementById('offcanvasNavbar');
// Get the navbar element to modify
const navbar = document.querySelector('.navbar');

// When offcanvas is shown
myOffcanvas.addEventListener('shown.bs.offcanvas', () => {
  navbar.classList.remove('navbar'); // Remove class
});

// When offcanvas is hidden
myOffcanvas.addEventListener('hidden.bs.offcanvas', () => {
  navbar.classList.add('navbar'); // Re-add class
});

}).catch(err => console.error("Asset failed to load", err));


  

