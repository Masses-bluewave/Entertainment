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

  

